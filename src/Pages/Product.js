import React from 'react';
import { Component } from 'react';
<<<<<<< HEAD
import addRecent from 'utils/functions/addRecent';
=======
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import BlackButton from '../components/button/BlackButton';
import BlueButton from '../components/button/BlueButton';
>>>>>>> da61b5f (Add: product page layout)

class Product extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Group>
          <BlackButton />
          <BlueButton />
        </Group>
      </Container>
    );
  }
}

export default Product;

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
