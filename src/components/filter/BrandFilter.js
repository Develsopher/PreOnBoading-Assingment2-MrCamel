import { Component } from 'react';
import styled from 'styled-components/macro';
import BrandButton from '../button/BrandButton';

export default class BrandFilter extends Component {
  constructor() {
    super();
    this.state = {
      checkedBrand: [],
      allBrand: [],
    };
  }

  // handleSellect = (e) => {
  //   if () {
  //     this.setState({selectedBrand: [...selectedBrand, e.target.value]})
  //   }

  //   //클릭한 브랜드들을 selectedBrand에 넣는다.
  // }
  render() {
    return (
      <Container onChange={this.handleChange}>
        {BRAND_NAME.map((data, index) => (
          <TitleWrap key={index} value={data.name}>
            <Title>{data.name}</Title>
          </TitleWrap>
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0px 20px 0px;
  width: 600px;

  button:hover {
    cursor: pointer;
    background-color: #46464d;
    color: white;
  }
`;

const TitleWrap = styled.button`
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

const BRAND_NAME = [
  { name: '구찌' },
  { name: '나이키' },
  { name: '스톤아일랜드' },
  { name: '루이비통' },
];
