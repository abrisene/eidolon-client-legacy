/*
 # stores/ducks/index.js
 # Ducks Index
 */

/*
 # Module Dependencies
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as App from './duck.app';

/*
 # Module Exports
 */

module.exports = {
  actions: {
    app: App.actions,
  },
  selectors: {
    app: App.selectors,
  },
  reducers: combineReducers({
    app: App.reducers,
    routing: routerReducer,
  }),
};
