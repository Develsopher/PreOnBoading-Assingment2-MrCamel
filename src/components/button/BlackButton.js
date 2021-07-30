import { Component } from 'react';
import styled from 'styled-components/macro';

export default class BlackButton extends Component {
  render() {
    return (
      <Container>
        <img src="/images/sad.svg" alt="" />
        <Title>관심없어요</Title>
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
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: white;
`;
