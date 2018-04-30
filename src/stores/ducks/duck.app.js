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

const updateAppUser = createAction('APP/USER/UPDATE');
const updateAppConfig = createAction('APP/CONFIG/UPDATE');
const updateAppStore = createAction('APP/STORES/UPDATE');

export const actions = {
  updateAppUser,
  updateAppConfig,
  updateAppStore,
};

// Selectors

const getAppUser = state => state.user;
const getAppConfig = state => state.config;
const getAppStores = state => state.stores;

export const selectors = {
  getAppUser,
  getAppConfig,
  getAppStores,
};

// Reducers

const initialState = {
  config: {},
  stores: {},
};

export const reducers = handleActions({
  'APP/USER/UPDATE': (state, action) => {
    const { payload } = action;
    return { ...state, user: payload };
  },
  'APP/CONFIG/UPDATE': (state, action) => {
    const { payload } = action;
    return { ...state, config: payload };
  },
  'APP/STORES/UPDATE': (state, action) => {
    const { payload } = action;
    const { key, value } = payload;

    const stores = { ...state.stores, [key]: value };
    return { ...state, stores };
  }
}, initialState);
