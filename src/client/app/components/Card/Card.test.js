import React from 'react';
import { shallow } from 'enzyme';
import Card, {Avatar} from './component.jsx';


describe('Card Suite', () => {
  test('should render correctly', () => {
    const avatar = 'avatar_url';
    const name = 'John Doe';
    const component = shallow(<Card avatar={avatar} name={name} />);

    expect(component.children().find(Avatar).prop('src')).toBe(avatar);
  });
});
