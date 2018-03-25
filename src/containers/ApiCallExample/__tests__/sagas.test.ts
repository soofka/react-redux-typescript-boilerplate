import { actions } from 'common/constants';
import { testGeneratorStep } from 'common/helpers';

const fetchDataMock = jest.fn();
jest.mock('../api', () => ({
  fetchData: fetchDataMock,
}));

import { getData } from '../sagas';

const testData = [1,2,3];

describe('ApiCallExample sagas', () => {

  describe('get data', () => {
    let generator;

    beforeEach(() => {
      generator = getData();
      fetchDataMock.mockClear();
    });

    it('fetches data properly', () => {
      fetchDataMock.mockImplementationOnce(() => testData);
      const { value } = testGeneratorStep(generator);
      expect(value).toEqual(testData);
    });

    it(`dispatches ${actions.GET_DATA_SUCCESS} action properly`, () => {
      expect(testGeneratorStep(generator, 2, { 2: { data: testData }})).toMatchSnapshot();
    });

    it(`dispatches ${actions.GET_DATA_FAILURE} action properly`, () => {
      fetchDataMock.mockImplementationOnce(() => { throw 'error'; });
      expect(testGeneratorStep(generator, 2, { 2: { error: true }})).toMatchSnapshot();
    });

  });

});
