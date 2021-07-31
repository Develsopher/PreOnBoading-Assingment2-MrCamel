import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BrandButton from 'components/button/BrandButton';
import LikeButton from 'components/button/LikeButton';
import UnLikeButton from 'components/button/UnLikeButton';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      disLike: false,
    };
  }

  render() {
    const { productList, isCheck } = this.props;

    console.log(productList);

    if (!productList[0]?.product.id) {
      return <Null>찾으려는 상품이 존재하지 않습니다.</Null>;
    }

    return (
      <Container>
        {productList ? (
          <>
            {isCheck
              ? productList
                  .filter(v => v.product.disLike === false)
                  .map(v => (
                    <Item to={`/product/${v.product.id}`} key={v.product.id}>
                      <Image src={v.product.image} alt="상품이미지" />
                      <Information>
                        <Group>
                          <BrandButton>{v.product.brand}</BrandButton>
                          {v.product.disLike ? (
                            <UnLikeButton>관심 없어요</UnLikeButton>
                          ) : (
                            <LikeButton>관심 있어요</LikeButton>
                          )}
                        </Group>
                        <Title>{v.product.title}</Title>
                        <Price>
                          <span>{(v.product.price * 1).toLocaleString()}</span>
                          원
                        </Price>
                      </Information>
                    </Item>
                  ))
              : productList.map(v => {
                  return (
                    <Item to={`/product/${v.product.id}`} key={v.product.id}>
                      <Image src={v.product.image} alt="상품이미지" />
                      <Information>
                        <Group>
                          <BrandButton>{v.product.brand}</BrandButton>
                          {v.product.disLike ? (
                            <UnLikeButton>관심 없어요</UnLikeButton>
                          ) : (
                            <LikeButton>관심 있어요</LikeButton>
                          )}
                        </Group>
                        <Title>{v.product.title}</Title>
                        <Price>
                          <span>{(v.product.price * 1).toLocaleString()}</span>
                          원
                        </Price>
                      </Information>
                    </Item>
                  );
                })}
          </>
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
  margin-top: 250px;
  font-size: 20px;
  color: #73737f;
`;
