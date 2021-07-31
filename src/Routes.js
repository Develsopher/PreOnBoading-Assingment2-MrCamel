import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import product from 'pages/Product';
import recentList from 'pages/RecentList';

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
