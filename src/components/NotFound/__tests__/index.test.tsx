import * as React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../';

describe('<NotFound/>', () => {

    it('renders correctly', () => {
        expect(shallow(<NotFound/>)).toMatchSnapshot();
    });

});
