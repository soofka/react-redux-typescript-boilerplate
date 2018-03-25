import IError from './IError';

export interface IEmptyAction {
  type: string;
  source?: string;
}

export interface IFailureAction extends IEmptyAction {
  type: string;
  source?: string;
  payload: {
    error: IError;
  };
}

export interface IAction<P> extends IEmptyAction {
  payload: P;
}

export default IAction;
