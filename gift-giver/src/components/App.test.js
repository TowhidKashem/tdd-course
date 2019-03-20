import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
