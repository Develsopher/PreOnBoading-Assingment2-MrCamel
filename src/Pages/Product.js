import { Component } from 'react';
import addRecent from '../utils/functions/addRecent';

class Product extends Component {
  render() {
    addRecent({ id: 1, title: '안녕', inquiriedAt: new Date() });
    return <></>;
  }
}

export default Product;
