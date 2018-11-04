import React from 'react';
import { shallow } from 'enzyme';
import Column, { Title } from './component.jsx';
import Card from '../Card';

describe('Column Suite', () => {
  test('should render correctly with zero users', () => {
    const title = 'column title';
    const users = [];
    const component = shallow(<Column title={title} users={users} />);

    expect(component.contains(<Title>{title}</Title>)).toBe(true);
    expect(component.find(Card)).toHaveLength(0);
  });
  test('should render correctly with > 0 users', () => {
    const title = 'column title';
    const users = [
      {avatar: 'avatar1', name:'user1'},
      {avatar: 'avatar2', name:'user2'}
    ];
    const component = shallow(<Column title={title} users={users} />);

    expect(component.contains(<Title>{title}</Title>)).toBe(true);
    expect(component.find(Card)).toHaveLength(2);
  });
});
