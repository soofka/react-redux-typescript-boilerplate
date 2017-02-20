import { combineReducers } from 'redux-immutable';
import { intlReducer } from 'react-intl-redux';

import routerReducer from './reducers/router';

const createReducer = (reducers = {}) => {
  return combineReducers({
    ...reducers,
    intl: intlReducer,
    routing: routerReducer
  });
};

export default createReducer;