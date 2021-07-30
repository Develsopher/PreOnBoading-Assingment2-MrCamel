import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import product from './pages/product';
import recentList from './pages/recentList';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={product} />
        <Route exact path="/recentlist" component={recentList} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
