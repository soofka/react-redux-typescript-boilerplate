import * as React from 'react';
import { shallow } from 'enzyme';

import About from '../';

describe('<About/>', () => {

    it('renders correctly', () => {
        expect(shallow(<About/>)).toMatchSnapshot();
    });

});
