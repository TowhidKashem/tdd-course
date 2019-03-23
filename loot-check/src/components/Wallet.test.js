import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Wallet } from './Wallet';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Wallet />', () => {
  const balance = 20;
  const props = { balance };
  const wallet = mount(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    // console.log(wallet.debug());
    expect(wallet.find('.balance').text()).toEqual(
      `Wallet Balance: ${balance}`
    );
  });
});
