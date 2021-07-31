import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Content from 'components/Content';
import BlackButton from 'components/button/BlackButton';
import BlueButton from 'components/button/BlueButton';
import axios from 'axios';
import addRecent from 'utils/functions/addRecent';
import updateRecent from 'utils/functions/updateRecent';

class product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      products: [],
    };
  }

  pickRandomProduct = products => {
    const randNum = Math.floor(Math.random() * products.length);
    const product = products[randNum];

    this.setState({ product });

    addRecent(product);
  };

  onDislike = () => {
    this.setState(prev => {
      prev.products.splice(prev.product.id, 1, {
        ...prev.product,
        disLike: !prev.product.disLike,
      });
      return {
        products: prev.products,
      };
    });

    const recents = JSON.parse(window.localStorage.getItem('recents'));
    const existedRecent = recents.find(
      v => v.product.id === this.state.product.id
    );

    updateRecent({
      ...existedRecent,
      product: {
        ...this.state.product,
        disLike: !this.state.product.disLike,
      },
    });
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
        <Header link="/recentlist">내가 본 상품 </Header>
        {product.disLike ? (
          (() => {
            alert('관심 없음 등록된 상품입니다.');
            this.pickRandomProduct(products);
          })()
        ) : (
          <Content product={product} />
        )}

        <Group>
          <BlackButton
            products={products}
            pickRandomProduct={this.pickRandomProduct}
            onDislike={this.onDislike}
          >
            관심 없어요
          </BlackButton>
          <BlueButton
            products={products.filter(v => v.id !== product.id)}
            pickRandomProduct={this.pickRandomProduct}
          >
            랜덤 상품 보기
          </BlueButton>
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
