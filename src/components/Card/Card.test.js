import React from 'react';
import { shallow } from 'enzyme';
import Card, {Avatar, Right} from './component.jsx';


describe('Card Suite', () => {
  test('should render correctly', () => {
    const avatar = 'avatar_url';
    const name = 'John Doe';
    const component = shallow(<Card user={{avatar, name, position: 0}}
      onUpdateUser={jest.fn()} />);

    expect(component.children().find(Avatar).prop('src')).toBe(avatar);
  });
});
