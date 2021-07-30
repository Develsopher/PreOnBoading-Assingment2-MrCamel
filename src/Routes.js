import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from '.Pages/Product';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
