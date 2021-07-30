import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo>
          <img src="/images/미스터카멜.png" alt="logo" />
        </Logo>
        <LinkButton to="/recentlist">
          <img src="/images/refresh.svg" alt="icon" />
          <span>최근 본 상품</span>
        </LinkButton>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0px 20px;
  width: 640px;
`;

const Logo = styled(Link)`
  img {
    height: 30px;
  }
`;

const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #2c2c31;

  img {
    margin-right: 10px;
  }
`;
