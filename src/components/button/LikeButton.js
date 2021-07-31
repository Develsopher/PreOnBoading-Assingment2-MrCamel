import { Component } from 'react';
import styled from 'styled-components/macro';

export default class LikeButton extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.children}</Title>
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
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: white;
`;
