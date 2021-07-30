import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BrandButton from 'components/button/BrandButton';
import BlackButton from 'components/button/BlackButton';

export default class ItemList extends Component {
  render() {
    const { products } = this.props;
    console.log(this.props.products);
    return (
      <Container>
        {products.map(product => (
          <Item key={product.id}>
            <Image src={product.image} alt="상품이미지" />
            <Information>
              <Group>
                <BrandButton>{product.brand}</BrandButton>
                <BlackButton>관심 없어요</BlackButton>
              </Group>
              <Title>{product.title}</Title>
              <Price>
                <span>{product.price.toLocaleString()}</span>원
              </Price>
            </Information>
          </Item>
        ))}
      </Container>
    );
  }
}

const Container = styled.div``;

const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 30px 0px;
  width: 600px;
  border-bottom: 1px solid #dddddd;

  button {
    height: 38px;
    max-width: 140px;
    border-radius: 50px;
  }
`;

const Image = styled.img`
  width: 180px;
  border-radius: 5px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 24px;
    margin-right: 5px;
  }

  div {
    font-size: 17px;
  }
`;

const Information = styled.div`
  margin-left: 30px;
`;

const Title = styled.h2`
  max-width: 350px;
  margin-top: 20px;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.5;
  word-break: keep-all;
  color: #111213;
`;

const Price = styled.div`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 500;
  color: #111213;

  span {
    margin-right: 3px;
    font-size: 28px;
    font-weight: 600;
  }
`;
