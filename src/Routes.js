import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import product from 'Pages/Product';
import recentList from 'Pages/RecentList';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={product} />
        <Route exact path="/recentlist" component={recentList} />
        <Route exact path="/product/:id" component={product} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
