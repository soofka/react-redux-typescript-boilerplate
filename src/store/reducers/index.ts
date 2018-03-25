import { combineReducers } from 'redux-immutable';

import { routerReducer as router } from 'react-router-redux';
import apiCallExample from './apiCallExampleReducer';

export default combineReducers({
  router,
  apiCallExample,
});
