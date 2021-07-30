import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from '.Pages/Product';
import RecentList from './Pages/RecentList';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/recentlist" component={RecentList} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
