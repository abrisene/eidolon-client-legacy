/*
 # routes/index.jsx
 # Routes Index
 */

/*
 # Module Dependencies
 */

import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Redirect } from 'react-router';
import { App } from '../components';

/*
 # Constants
 */

const routeConstants = {
  ABOUT: '/about',
};

const Index = () => {
  return <div>Hello React!</div>;
};

const Test = () => {
  return <div>Hello World!</div>;
};

/*
 # Routes
 */

const Routes = () => {
  return (
    <div>
      <Route path="/" component={App} />
      {/*<Route path={routeConstants.ABOUT} component={Test} />*/}
    </div>
  );
};

module.exports = {
  routeConstants,
  Routes,
};
