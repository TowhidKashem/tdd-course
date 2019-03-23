import * as actionTypes from './actionTypes';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;

  const expectedAction = {
    type: actionTypes.SET_BALANCE,
    balance
  };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit in the balance', () => {
  const deposit = 10;

  const expectedAction = {
    type: actionTypes.DEPOSIT,
    deposit
  };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
  const withdrawl = 10;

  const expectedAction = {
    type: actionTypes.WITHDRAW,
    withdrawl
  };

  expect(actions.withdraw(withdrawl)).toEqual(expectedAction);
});
