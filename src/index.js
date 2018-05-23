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

import axios from 'axios';
import io from 'socket.io-client';

import config from './config';

import './styles';

/*
 # Critical Variables
 */

const { socketURI, apiURI, apiKeys, apiURLs, ...env  } = config;

/*
 # Middleware Variables
 */

const socket = socketURI ? io(socketURI) : undefined;
const history = createHistory();

/*
 # Redux Setup
 */

const {  } = config;

const initialState = {
  app: {
    config: {},
    keys: { ...apiKeys },
    urls: { ...apiURLs, apiURI, socketURI },
    env,
    status: {
      socket: socket ? true : false,
    },
    stores: {},
  },
};

const store = configureStore(initialState, { ...config, history, socket });

if (apiURI) {
  axios.get(`${apiURI}/api/configs`)
    .then((res) => {
      const { data } = res;
      const { apiKeys: keys, ...config } = data;

      store.dispatch({
        type: 'APP/CONFIG/UPDATE',
        data: config,
      });

      store.dispatch({
        type: 'APP/KEYS/UPDATE',
        data: keys,
      });
    })
    .catch(err => console.error(err));
}

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
