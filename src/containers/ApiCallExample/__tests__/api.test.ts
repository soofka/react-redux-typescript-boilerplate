const testData = [1,2,3];

const axiosGetMock = jest.fn(() => ({
  then: (f) => f({ data: testData })
}));

jest.mock('axios', () => ({
  default: { get: axiosGetMock },
}));

import { fetchData } from '../api';

describe('ApiCallExample API', () => {

  it('calls and handles fetchData result correctly', () => {
    const result = fetchData();
    expect(axiosGetMock.mock.calls[0]).toMatchSnapshot();
    expect(result).toMatchSnapshot();
  });

});
