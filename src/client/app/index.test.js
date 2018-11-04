import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('Sample suite', () => {
  describe('A sample function', () => {
      test('should return true', () => {
          expect(true).toBe(true);
      });
      test('renders without crashing', () => {
       expect(shallow(<App />).contains(<h1>Simple Hiring Manager</h1>)).toBe(true);
     });
  });
});
