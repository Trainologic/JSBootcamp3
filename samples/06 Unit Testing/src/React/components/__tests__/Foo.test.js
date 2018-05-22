import * as React from 'react';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Foo from '../Foo';

describe('Foo component', () => {
    it('should accept label prop', () => {
        const wrapper = mount(<Foo label={'My Label'} />);

        wrapper.simulate('click');

        expect(wrapper.prop('label')).toBe('My Label');
    });
});