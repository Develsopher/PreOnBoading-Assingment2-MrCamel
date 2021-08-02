import { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ItemList from '../components/item/ItemList';
import BrandFilter from '../components/filter/BrandFilter';
import readRecent from 'utils/functions/readRecents';

class recentList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      searchedBrandList: [],
      isCheck: false,
      activeTab: '',
    };
  }

  onFilter = data => {
    if (!data.checked) {
      this.setState(prev => {
        return {
          searchedBrandList: prev.searchedBrandList.concat(
            prev.productList.filter(v => v.product.brand === data.name).length
              ? prev.productList.filter(v => v.product.brand === data.name)
              : [{ product: { brand: data.name } }]
          ),
        };
      });
    } else {
      this.setState(prev => {
        return {
          searchedBrandList: prev.searchedBrandList.filter(v => {
            console.log(v.product.brand);
            console.log(data.name);
            return v.product.brand !== data.name;
          }),
        };
      });
    }
  };

  handleSelect = e => {
    this.setState({ activeTab: e.target.value });
  };

  sort = func => {
    this.setState(prev => {
      return {
        productList: prev.productList.sort(func),
        searchedBrandList: prev.searchedBrandList.sort(func),
      };
    });
  };

  handleCheck = () => {
    this.setState(prev => {
      return {
        isCheck: !prev.isCheck,
      };
    });
  };

  componentDidMount() {
    this.setState({ productList: readRecent() });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.activeTab !== this.state.activeTab) {
      if (this.state.activeTab === '1') {
        this.sort((a, b) => new Date(b.inquiriedAt) - new Date(a.inquiriedAt));
      }

      if (this.state.activeTab === '2') {
        this.sort((a, b) => a.product.price - b.product.price);
      }

      if (this.state.activeTab === '3') {
        this.sort((a, b) => b.product.price - a.product.price);
      }
    }
  }

  render() {
    const { productList, isCheck, searchedBrandList } = this.state;
    const { handleCheck, handleSelect } = this;

    console.log(searchedBrandList);

    return (
      <Container>
        <Header link="/">상품 보러 가기</Header>
        <BrandFilter onFilter={this.onFilter} productList={productList} />
        <Group>
          <Check onClick={handleCheck}>
            <img
              src={
                isCheck === true ? '/images/checked.svg' : '/images/uncheck.svg'
              }
              alt="check"
            />
            <span>관심 없는 상품 안보기</span>
          </Check>
          <Select>
            <select onChange={handleSelect}>
              <option value="1">최근 조회순</option>
              <option value="2">낮은 가격순</option>
              <option value="3">높은 가격순</option>
            </select>
          </Select>
        </Group>
        <Line />

        {
          <ItemList
            isCheck={isCheck}
            productList={
              searchedBrandList.length ? searchedBrandList : productList
            }
          />
        }
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
