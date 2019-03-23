import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Wallet } from './Wallet';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Wallet />', () => {
  const balance = 20;
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  // Props come from redux, `balance` is from mapStateToProps
  // ...and `deposit` and `withdrawl` from mapDispatchToProps
  const props = {
    balance,
    deposit: mockDeposit,
    withdraw: mockWithdraw
  };
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

  it('creates an input enter amount to deposit or withdraw', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into the wallet input', () => {
    const balance = '25'; // input field values are always string not number

    beforeEach(() => {
      wallet.find('.input-wallet').simulate('change', {
        target: { value: balance }
      });
    });

    it('updates the state value for `balance` based on what the user entered and converts it to a number', () => {
      expect(wallet.state().balance).toBe(parseInt(balance, 10));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it("dispatches the `deposit()` function it recives via mapDispatchToProps with the local state's `balance`", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(balance, 10));
      });
    });

    describe('and the user wants to make a withdrawl', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it("dispatches the `withdraw()` function it recives via mapDispatchToProps with the local state's `balance`", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(balance, 10));
      });
    });
  });
});
