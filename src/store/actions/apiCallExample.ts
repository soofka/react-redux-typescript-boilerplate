import { actions } from 'common/constants';

import { IAction, IEmptyAction, IFailureAction, IError } from 'common/interfaces';
import { IDataExample } from 'containers/ApiCallExample';

export interface IGetDataAction extends IEmptyAction {}
export interface IGetDataSuccessAction extends IAction<{ data: IDataExample }> {}
export interface IGetDataFailureAction extends IFailureAction {}

export const getData = (): IGetDataAction => ({
  type: actions.GET_DATA,
});

export const getDataSuccess = (data: IDataExample): IGetDataSuccessAction => ({
  type: actions.GET_DATA_SUCCESS,
  payload: {
    data,
  },
});

export const getDataFailure = (error: IError): IGetDataFailureAction => ({
  type: actions.GET_DATA_FAILURE,
  payload: {
    error,
  },
});
