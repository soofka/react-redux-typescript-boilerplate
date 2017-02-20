import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({'locationBeforeTransitions': null});

const routerReducer = (state = initialState, { type, payload }) => {
  if (type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', payload);
  }

  return state;
};

export default routerReducer;