import { Component } from 'react';
import styled from 'styled-components/macro';
import BrandButton from '../button/BrandButton';

export default class BrandFilter extends Component {
  render() {
    return (
      <Container>
        {BRAND_NAME.map((data, index) => (
          <BrandButton key={index}>{data.name}</BrandButton>
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

const BRAND_NAME = [
  { name: '구찌' },
  { name: '나이키' },
  { name: '스톤아일랜드' },
  { name: '루이비통' },
  { name: '샤넬' },
];
