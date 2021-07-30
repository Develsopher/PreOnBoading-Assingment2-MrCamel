import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Pages/Product';

import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById('root')
);
