import * as React from 'react';
import { shallow } from 'enzyme';

import Home from '../';

describe('<Home/>', () => {

    it('renders correctly', () => {
        expect(shallow(<Home/>)).toMatchSnapshot();
    });

});
