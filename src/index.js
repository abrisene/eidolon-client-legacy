/*
 # index.js
 # Client Index
 */

/*
 # Module Dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import { Routes } from './routes';
import { configureStore } from './stores';

import io from 'socket.io-client';

import './styles';

/*
 # Utility Methods
 */

const parseEnvJSON = (env) => env !== undefined ? JSON.parse(env) : undefined;

/*
 # Critical Variables
 */

const apiURL = parseEnvJSON(process.env.API_URLS) || {};
const apiKeys = parseEnvJSON(process.env.API_KEYS) || {};


/*
 # Middleware Variables
 */

const socket = apiURL.socket ? io(apiURL.socket) : undefined;
const history = createHistory();


/*
 # Redux Setup
 */

const initialState = {
  app: {
    status: {
      socket: socket ? true : false,
    },
    env: {
      NODE_ENV: process.env.NODE_ENV,
      APP_NAME: process.env.APP_NAME,
    },
    stores: {},
  },
};

const store = configureStore(initialState, { history, socket });

/*
 # Program
 */

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('js-app-body')
);
