/*
 # stores/index.js
 # Stores Index
 */

/*
 # Module Dependencies
 */

import configureStore from './stores';
import { actions, selectors, reducers } from './ducks';

/*
 # Module Exports
 */

module.exports = {
    configureStore,
    actions,
    selectors,
    reducers,
};
