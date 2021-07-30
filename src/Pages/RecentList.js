import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/header/Header';
import ItemList from '../components/item/ItemList';
import BrandFilter from '../components/filter/BrandFilter';

class recentList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isCheck: false,
    };
  }

  componentDidMount() {
    axios
      .get('/data/ProductData.json')
      .then(res => {
        this.setState({ products: res.data.product_lists });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleCheck = () => {
    this.setState(prev => ({
      isCheck: !prev.isCheck,
    }));
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Header link="/">상품 보러 가기</Header>
        <BrandFilter></BrandFilter>
        <Group>
          <Check onClick={() => this.handleCheck()}>
            <img
              src={
                this.state.isCheck === true
                  ? '/images/checked.svg'
                  : '/images/uncheck.svg'
              }
              alt="check"
            />
            <span>관심 없는 상품 안보기</span>
          </Check>
          <Select>
            <select>
              <option>최근 조회순</option>
              <option>낮은 가격순</option>
            </select>
          </Select>
        </Group>
        <Line />
        <ItemList products={products} />
      </Container>
    );
  }
}

export default recentList;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  margin-top: 20px;
  width: 640px;
  border-bottom: 1px solid #dddddd;
`;

const Group = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Check = styled.button`
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 500;
  color: #46464d;
  cursor: pointer;

  img {
    margin-right: 15px;
  }
`;

const Select = styled.div`
  select {
    border: none;
    font-size: 19px;
    font-weight: 500;
    padding: 10px;
    color: #46464d;
  }

  & :focus {
    outline: none;
  }
`;
