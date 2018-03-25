import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import apiCallExampleSaga from 'containers/ApiCallExample/sagas';

let store;
const sagas = [
  apiCallExampleSaga,
];

export const initStore = (reducers, history) => {
  store = configureStore(reducers, history);
  return store;
};

export const configureStore = (reducers, history, initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const devtools = (window as any).devToolsExtension || (() => (noop) => noop);

  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares), devtools()];

  const store = createStore(
    reducers,
    fromJS(initialState),
    compose.apply(this, enhancers),
  );

  for (let saga of sagas) {
    sagaMiddleware.run(saga);
  }

  return store;
};

export const getStore = () => {
  return store;
};
