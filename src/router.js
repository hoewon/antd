import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import Products from './routes/Products';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/products" component={Products} />
    </Router>
  );
};
