import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Content from 'components/Content';
import BlackButton from 'components/button/BlackButton';
import BlueButton from 'components/button/BlueButton';
import axios from 'axios';
import addRecent from 'utils/functions/addRecent';

class product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      nowProduct: [],
    };
  }

  randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  componentDidMount() {
    axios
      .get('/data/ProductData.json')
      .then(res => {
        this.setState({ products: res.data.product_lists });
        this.setState({
          nowProduct: this.randomValueFromArray(this.state.products),
        });
      })
      .catch(err => {
        console.error(err);
      });

    addRecent(this.state.products);
  }

  render() {
    const { nowProduct } = this.state;
    console.log(this.state.nowProduct);
    return (
      <Container>
        <Header />
        <Content nowProduct={nowProduct} />
        <Group>
          <BlackButton />
          <BlueButton />
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
`;
