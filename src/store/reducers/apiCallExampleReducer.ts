import { fromJS } from 'immutable';

import { IAction } from 'common/interfaces';
import { actions } from 'common/constants';

const initialState = fromJS({
  data: [],
  loading: false,
  error: false,
});

export const apiCallExampleReducer = (state = initialState, { type, payload }: IAction<any>) => {
  switch (type) {
    case actions.GET_DATA:
      return state
        .set('error', false)
        .set('loading', true);

    case actions.GET_DATA_SUCCESS:
      return state
        .set('data', fromJS(payload.data))
        .set('loading', false);

    case actions.GET_DATA_FAILURE:
      return state
        .set('error', fromJS(payload.error))
        .set('loading', false);

    default:
      return state;
  }
};

export default apiCallExampleReducer;
