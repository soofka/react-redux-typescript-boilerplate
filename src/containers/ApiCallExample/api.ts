import axios from 'axios';

import { IDataExample } from './index';

import { dataApiBaseUrl } from 'common/constants';

const parseData = (data: IDataExample): IDataExample => data.filter((item) => item % 2 === 0);

export const fetchData = (): Promise<IDataExample> => axios.get(dataApiBaseUrl).then((response) => parseData(response.data));
