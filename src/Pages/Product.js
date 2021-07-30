import React from 'react';
import { Component } from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import Header from 'components/Header';
import Content from 'components/Content';
import BlackButton from 'components/button/BlackButton';
import BlueButton from 'components/button/BlueButton';
import axios from 'axios';

class product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get('/data/ProductData.json')
      .then(res => {
        this.setState({ products: res.data.product_lists });
        console.log(this.state.products);
      })
      .catch(err => {
        console.error(err);
      });
  }
=======
import addRecent from 'utils/functions/addRecent';
import styled from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';
import BlackButton from '../components/button/BlackButton';
import BlueButton from '../components/button/BlueButton';
>>>>>>> e6b382f (Fix)

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
