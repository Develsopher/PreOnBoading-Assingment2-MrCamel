import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo to="/">
          <img src="/images/미스터카멜.png" alt="logo" />
        </Logo>
        <LinkButton to={this.props.link}>
          {this.props.children === '상품 보러 가기' ? (
            <img src="/images/shopping-cart.svg" alt="icon" />
          ) : (
            <img src="/images/refresh.svg" alt="icon" />
          )}
          <span>{this.props.children}</span>
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
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #2c2c31;

  img {
    margin-right: 10px;
    width: 26px;
  }

  &:hover {
    background-color: #eff0ff;
  }
`;
