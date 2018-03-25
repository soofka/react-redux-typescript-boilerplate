import * as React from 'react';
import { connect } from 'react-redux';

import { IError, IImmutableArray } from 'common/interfaces';

import { getData } from 'store/actions';

import {
  selectData,
  selectError,
  selectLoading,
} from './selectors';

export type IDataExample = number[];

interface IApiCallExampleProps {
  data: IImmutableArray<IDataExample>;
  loading: boolean;
  error: IError;
  onButtonClick: () => void;
}

export class ApiCallExample extends React.Component<IApiCallExampleProps> {

  public render() {
    const { data, loading, error, onButtonClick } = this.props;
    const dataObject: IDataExample = data.toJS();

    if (loading) {
      return <p>LOADING</p>;
    }

    return (
      <div>
        <button onClick={onButtonClick}>
          Click me to get data
        </button>
        <p>{error ? 'ERROR' : (dataObject && dataObject.length ? `DATA: ${dataObject && dataObject.join(',')}` : null)}</p>
      </div>
    );
  }

}

export const mapStateToProps = (state) => ({
  data: selectData(state),
  error: selectError(state),
  loading: selectLoading(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onButtonClick() {
    dispatch(getData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiCallExample);
