import { Component } from 'react';
import styled from 'styled-components/macro';

export default class BrandButton extends Component {
  render() {
    const { brand } = this.props;
    return (
      <Container>
        <Title>{brand}</Title>
      </Container>
    );
  }
}

const Container = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #e9ebed;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #46464d;
`;
