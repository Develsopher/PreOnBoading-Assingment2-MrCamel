import { Component } from 'react';
import styled from 'styled-components/macro';
import BrandButton from './button/BrandButton';

class Content extends Component {
  render() {
    const { product } = this.props;
    return (
      <Container>
        <Image>
          <img src={product?.image} alt="상품이미지" />
        </Image>
        <TitleGroup>
          <BrandButton>{product?.brand}</BrandButton>
          <Title>{product?.title}</Title>
        </TitleGroup>
        <Price>
          <span>{(product?.price * 1).toLocaleString('en')}</span>원
        </Price>
      </Container>
    );
  }
}

export default Content;

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
