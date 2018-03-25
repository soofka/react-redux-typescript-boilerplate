import { actions } from 'common/constants';
import { testGeneratorStep } from 'common/helpers';

const takeLatestMock = jest.fn();
jest.mock('redux-saga/effects', () => ({
  takeLatest: takeLatestMock,
}));

import watchGetData from '../sagas';

describe('ApiCallExample saga watcher', () => {

    let generator;

    beforeEach(() => {
      generator = watchGetData();
    });

    it(`should take ${actions.GET_DATA} action`, () => {
      testGeneratorStep(generator);
      expect(takeLatestMock.mock.calls[0][0]).toEqual(actions.GET_DATA);
    });

    it('should be done', () => {
      const { done } = testGeneratorStep(generator, 2);
      expect(done).toBeTruthy();
    });

});
