import { Component } from 'react';
import styled from 'styled-components/macro';
import BrandButton from './button/BrandButton';

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Image>
          <img src="/images/gucci.png" alt="상품이미지" />
        </Image>
        <TitleGroup>
          <BrandButton>Gucci</BrandButton>
          <Title>중고 구찌 래빗홀 가방</Title>
        </TitleGroup>
        <Price>
          <span>300,000</span>원
        </Price>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 30px 20px;
  width: 640px;
`;

const Image = styled.div`
  img {
    width: 600px;
    height: 500px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const Title = styled.div`
  font-size: 29px;
  font-weight: 600;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const Price = styled.div`
  text-align: right;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  span {
    margin-right: 3px;
    font-size: 35px;
    font-weight: 600;
  }
`;
