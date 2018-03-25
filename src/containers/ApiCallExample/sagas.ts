import { takeLatest, put } from 'redux-saga/effects';

import { GET_DATA } from 'common/constants/actions';
import { getDataSuccess, getDataFailure } from 'store/actions';

import { fetchData } from './api';

export function* getData() {
  try {
    const data = yield fetchData();
    yield put(getDataSuccess(data));
  } catch (error) {
    yield put(getDataFailure(error));
  }
}

export default function* watch() {
  yield takeLatest(GET_DATA, getData);
}
