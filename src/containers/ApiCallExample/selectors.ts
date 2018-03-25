import { IError } from 'common/interfaces';
import { IDataExample } from './index';

export const selectData = (state): IDataExample => state.getIn(['apiCallExample', 'data']);
export const selectError = (state): IError => state.getIn(['apiCallExample', 'error']);
export const selectLoading = (state): boolean => state.getIn(['apiCallExample', 'loading']);
