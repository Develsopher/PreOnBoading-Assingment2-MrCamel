import { Component } from 'react';
import styled from 'styled-components/macro';

export default class BrandFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: BRAND_NAME,
    };
  }

  onCheck = (data, idx) => {
    const { onFilter } = this.props;

    this.setState(prev => {
      prev.brand.splice(idx, 1, {
        ...data,
        checked: !data.checked,
      });
      return {
        brand: prev.brand,
      };
    });
    onFilter(data);
  };

  render() {
    const { brand } = this.state;
    return (
      <Container>
        {brand.map((data, idx) => (
          <>
            {data.checked ? (
              <TitleWrap
                style={{ display: `${!data.name && 'none'}` }}
                color="white"
                backgroundColor="#46464d"
                key={data.name}
                onClick={() => this.onCheck(data, idx)}
              >
                <Title>{data.name}</Title>
              </TitleWrap>
            ) : (
              <TitleWrap
                style={{ display: `${!data.name && 'none'}` }}
                color="#46464d"
                backgroundColor="white"
                key={data.name}
                onClick={() => this.onCheck(data, idx)}
              >
                <Title>{data.name}</Title>
              </TitleWrap>
            )}
          </>
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
  background-color: ${props => props.backgroundColor};
  border-radius: 50px;
  border: 1px solid #e9ebed;
  color: ${props => props.color};
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: 400;
`;

const BRAND_NAME = [
  { name: '구찌', checked: false },
  { name: '나이키', checked: false },
  { name: '스톤아일랜드', checked: false },
  { name: '루이비통', checked: false },
  { name: '샤넬', checked: false },
  { name: '', checked: false },
];
