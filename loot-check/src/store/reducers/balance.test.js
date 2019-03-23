import * as actionTypes from '../actions/actionTypes';
import balanceReducer from './balance';

describe('balance reducer', () => {
  it('sets a balance', () => {
    const prevState = undefined;
    const balance = 10;
    const action = {
      type: actionTypes.SET_BALANCE,
      balance
    };

    expect(balanceReducer(prevState, action)).toEqual({
      balance
    });
  });

  it('deposits into the balance', () => {
    const balance = 5;
    const deposit = 10;

    const action = {
      type: actionTypes.DEPOSIT,
      deposit
    };

    const prevState = {
      balance
    };

    expect(balanceReducer(prevState, action)).toEqual({
      balance: balance + deposit
    });
  });

  it('withdraws from the balance', () => {
    const balance = 15;
    const withdrawl = 5;

    const action = {
      type: actionTypes.WITHDRAW,
      withdrawl
    };

    const prevState = {
      balance
    };

    expect(balanceReducer(prevState, action)).toEqual({
      balance: balance - withdrawl
    });
  });
});
