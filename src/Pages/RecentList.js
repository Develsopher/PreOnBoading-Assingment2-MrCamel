import { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ItemList from '../components/item/ItemList';
import BrandFilter from '../components/filter/BrandFilter';
import readRecent from 'utils/functions/readRecents';
import readRecents from 'utils/functions/readRecents';

class recentList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      searchedBrandList: [],
      isCheck: false,
    };
  }

  onFilter = data => {
    if (!data.checked) {
      this.setState(prev => ({
        searchedBrandList: prev.searchedBrandList.concat(
          prev.productList.filter(v => v.product.brand === data.name)
        ),
      }));
    } else {
      this.setState(prev => ({
        searchedBrandList: prev.searchedBrandList.filter(
          v => v.product.brand !== data.name
        ),
      }));
    }
  };

  componentDidMount() {
    this.setState({ productList: readRecent() });
  }

  handleCheck = () => {
    this.setState(prev => ({
      isCheck: !prev.isCheck,
    }));
  };

  render() {
    const { productList, isCheck, searchedBrandList } = this.state;
    return (
      <Container>
        <Header link="/">상품 보러 가기</Header>
        <BrandFilter onFilter={this.onFilter} productList={productList} />
        <Group>
          <Check onClick={() => this.handleCheck()}>
            <img
              src={
                isCheck === true ? '/images/checked.svg' : '/images/uncheck.svg'
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
        <ItemList
          productList={
            searchedBrandList.length ? searchedBrandList : productList
          }
        />
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
