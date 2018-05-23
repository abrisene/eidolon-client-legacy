/*
 # duck.app.js
 # Root App Duck
 */

/*
 # Module Dependencies
 */

import { createAction, handleActions } from 'redux-actions';

/*
 # Module Exports
 */

// Actions

const updateConfig = createAction('APP/CONFIG/UPDATE');
const updateEnv = createAction('APP/ENV/UPDATE');
const updateStatus = createAction('APP/STATUS/UPDATE');
const updateStore = createAction('APP/STORES/UPDATE');

export const actions = {
  updateConfig,
  updateEnv,
  updateStatus,
  updateStore,
};

// Selectors

const getConfig = state => state.config;
const getEnv = state => state.env;
const getStatus = state => state.status;
const getStores = state => state.stores;

export const selectors = {
  getConfig,
  getEnv,
  getStatus,
  getStores,
};

// Reducers

const initialState = {
  config: {},
  keys: {},
  urls: {},
  env: {},
  status: {},
  stores: {},
};

export const reducers = handleActions({
  'APP/CONFIG/UPDATE': (state, action) => {
    const { data } = action;
    return { ...state, config: data };
  },
  'APP/KEYS/UPDATE': (state, action) => {
    const { data } = action;
    return { ...state, keys: { ...state.keys, ...data } };
  },
  'APP/URLS/UPDATE': (state, action) => {
    const { data } = action;
    return { ...state, urls: { ...state.urls, ...data } };
  },
  'APP/ENV/UPDATE': (state, action) => {
    const { data } = action;
    return { ...state, env: data };
  },
  'APP/STATUS/UPDATE': (state, action) => {
    const { data } = action;
    const { key, value } = data;
    const status = { ...state.status, [key]: value };
    return { ...state, status };
  },
  'APP/STORES/UPDATE': (state, action) => {
    const { data } = action;
    const { key, value } = data;

    const stores = { ...state.stores, [key]: value };
    return { ...state, stores };
  }
}, initialState);
