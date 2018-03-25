import { fromJS } from 'immutable';

import {
  selectData,
  selectError,
  selectLoading,
} from "../selectors";

describe('selectors', () => {

  let state;

  beforeEach(() => {
    state = fromJS({
      apiCallExample: {
        data: 'test data',
        loading: false,
        error: 'test error',
      },
    });
  });

  it('correctly select data', () => {
    expect(selectData(state)).toMatchSnapshot();
  });

  it('correctly select error', () => {
    expect(selectError(state)).toMatchSnapshot();
  });

  it('correctly selects loading', () => {
    expect(selectLoading(state)).toMatchSnapshot();
  });

});
