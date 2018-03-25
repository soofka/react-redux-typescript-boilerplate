import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../';

describe('<App/>', () => {

    it('renders correctly', () => {
        expect(shallow(<App/>)).toMatchSnapshot();
    });

});
