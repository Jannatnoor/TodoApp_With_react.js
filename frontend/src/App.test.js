import React from 'react';
import {shallow } from 'enzyme';
import App from './App';

describe('rendering components', () => {
  it('randers app without crashing', () => {
     shallow(<App/>);
  });
});
