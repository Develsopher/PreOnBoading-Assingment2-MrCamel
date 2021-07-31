import { Component } from 'react';
import styled from 'styled-components/macro';

export default class BlackButton extends Component {
  render() {
    const { randomPick, products } = this.props;

    return (
      <Container onClick={() => randomPick(products)}>
        <img src="/images/sad.svg" alt="" />
        <Title>{this.props.children}</Title>
      </Container>
    );
  }
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 285px;
  height: 60px;
  border-radius: 5px;
  background-color: #2c2c31;

  img {
    margin-right: 10px;
  }

  & :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: white;
`;
