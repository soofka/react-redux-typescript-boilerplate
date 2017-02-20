import * as Redux from 'redux';

export interface Store<T> extends Redux.Store<T> {}

const configureStore = (reducer, initialState = {}) : Store<any> => {
  const store = Redux.createStore(
    reducer,
    initialState
  );

  return store;
};

export default configureStore;