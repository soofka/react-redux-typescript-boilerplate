import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';

import { dataApiBaseUrl } from 'common/constants';

const testData = [1,2,3,4,5];
const axiosMock = new axiosMockAdapter(axios);
axiosMock.onGet(dataApiBaseUrl).reply(200, testData);

import { fetchData } from '../api';

describe('ApiCallExample API', () => {

  it('calls and handles fetchData result correctly', () => {
    return fetchData().then((result) => {
      expect(result).toMatchSnapshot();
    });
  });

});
