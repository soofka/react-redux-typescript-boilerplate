import * as React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { ApiCallExample, mapStateToProps, mapDispatchToProps } from '../';

const testData = [1,2,3];

describe('<ApiCallExample />', () => {

  describe('render correctly', () => {

    it('', () => {
      expect(<ApiCallExample />).toMatchSnapshot();
    });

    it('with loading indicator', () => {
      expect(<ApiCallExample loading={true} />).toMatchSnapshot();
    });

    it('with error', () => {
      expect(<ApiCallExample error={true} />).toMatchSnapshot();
    });

    it('with data', () => {
      expect(<ApiCallExample data={testData} />).toMatchSnapshot();
    });

  });

  it('calls onButtonClick after button is clicked', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<ApiCallExample data={fromJS(testData)} onButtonClick={onButtonClick} />);
    const button = wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('maps state to props correctly', () => {
    const state = fromJS({
      apiCallExample: {
        data: testData,
        error: false,
        loading: false,
      },
    });

    expect(mapStateToProps(state)).toMatchSnapshot();
  });

  describe('maps dispatch to props correctly', () => {
    const dispatch = jest.fn();
    let tempProps;

    beforeEach(() => {
      dispatch.mockClear();
      tempProps = mapDispatchToProps(dispatch);
    });

    it('onButtonClick prop', () => {
      tempProps.onButtonClick();
      expect(dispatch.mock.calls[0]).toMatchSnapshot();
    });

  });

});
