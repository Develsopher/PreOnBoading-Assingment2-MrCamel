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
        <Header link="/recentlist">최근 본 상품</Header>
        <Content />
        <Group>
          <BlackButton>관심없어요</BlackButton>
          <BlueButton>다른 상품 보기</BlueButton>
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

  button:hover {
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 15px;
  width: 600px;
`;
