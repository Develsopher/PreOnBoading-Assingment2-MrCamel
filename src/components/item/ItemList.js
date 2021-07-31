import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BrandButton from 'components/button/BrandButton';
import BlackButton from 'components/button/BlackButton';
import BlueButton from 'components/button/BlueButton';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      disLike: false,
    };
  }
  componentDidUpdate() {}

  render() {
    const { productLists } = this.props;
    return (
      <Container>
        {productLists ? (
          productLists.map(v => (
            <Item key={v.product.id}>
              <Image src={v.product.image} alt="상품이미지" />
              <Information>
                <Group>
                  <BrandButton>{v.product.brand}</BrandButton>
                  {v.product.disLike ? (
                    <BlackButton>관심 없어요</BlackButton>
                  ) : (
                    <BlueButton>관심 있어요</BlueButton>
                  )}
                </Group>
                <Title>{v.product.title}</Title>
                <Price>
                  <span>{(v.product.price * 1).toLocaleString()}</span>원
                </Price>
              </Information>
            </Item>
          ))
        ) : (
          <Null>최근 본 상품이 없습니다.</Null>
        )}
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

const Null = styled.div`
  font-size: 20px;
`;