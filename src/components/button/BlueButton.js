import { Component } from 'react';
import styled from 'styled-components/macro';

export default class BlueButton extends Component {
  render() {
    return (
      <Container>
        <Title>다른 상품 보기</Title>
      </Container>
    );
  }
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 285px;
  height: 60px;
  border-radius: 5px;
  background-color: #202bef;

  & :hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: white;
`;
