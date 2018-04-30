/*
 # stores.js
 # Redux Store Config
 */

/*
 # Module Dependencies
 */

import { createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSocketIoMiddleware from 'redux-socket.io';
import { routerMiddleware } from 'react-router-redux';

import { reducers } from './ducks';

/*
 # Module Exports
 */

module.exports = function configureStore(initialState, config = {}) {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
      middleware.push(createLogger());
  }

  if (config.history !== undefined) {
    middleware.push(routerMiddleware(history));
  }

  if (config.socket !== undefined) {
    middleware.push(createSocketIoMiddleware(config.socket, "SOCKET/"));
  }

  return applyMiddleware(...middleware)(createStore)(reducers, initialState);
}
