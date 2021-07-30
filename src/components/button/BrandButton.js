import { Component } from 'react';
import styled from 'styled-components/macro';

export default class BrandButton extends Component {
  render() {
    const { brand } = this.props;
    return (
      <Container>
<<<<<<< HEAD
        <Title>{brand}</Title>
=======
        <Title>{this.props.children}</Title>
>>>>>>> 5668f042c4e655a6a55ed9a5bc6ec46184497ba1
      </Container>
    );
  }
}

const Container = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #e9ebed;
  color: #46464d;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: 400;
`;
