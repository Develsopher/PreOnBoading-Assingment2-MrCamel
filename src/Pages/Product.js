import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Content from 'components/Content';
import BlackButton from 'components/button/BlackButton';
import BlueButton from 'components/button/BlueButton';
import axios from 'axios';
import addRecent from 'utils/functions/addRecent';

class product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      products: [],
    };
  }

  pickRandomProduct = products => {
    const randNum = Math.floor(Math.random() * products.length + 1);
    const product = products.find(v => v.id === randNum);

    this.setState({ product });

    addRecent(product);
  };

  onDislike = () => {
    this.setState(prev => ({
      product: {
        ...prev.product,
        disLike: !prev.product.disLike,
      },
    }));
  };

  componentDidMount() {
    axios
      .get('/data/ProductData.json')
      .then(res => {
        this.pickRandomProduct(res.data.product_lists);
        this.setState({ products: res.data.product_lists });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { product, products } = this.state;
    return (
      <Container>
        <Header link="/recentlist" />
        <Content product={product} />
        <Group>
          <BlackButton
            products={products}
            pickRandomProduct={this.pickRandomProduct}
            onDislike={this.onDislike}
          />
          <BlueButton
            products={products.filter(v => v.id !== product.id)}
            pickRandomProduct={this.pickRandomProduct}
          />
        </Group>
      </Container>
    );
  }
}

export default product;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Group = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
