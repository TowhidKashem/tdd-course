import * as actionTypes from '../actions/actionTypes';
import balanceReducer from './balance';
// import balanceReducer2 from './balance';

describe('balance reducer', () => {
  const prevState = undefined;
  const balance = 10;

  describe('when initializing', () => {
    const action = {
      type: actionTypes.SET_BALANCE,
      balance
    };

    it('sets a balance', () => {
      expect(balanceReducer(prevState, action)).toEqual({
        balance
      });
    });

    // describe('then re-initializing (if page reloads)', () => {
    //   it('reads the balance from cookies', () => {
    //     expect(balanceReducer2(prevState, {})).toEqual({
    //       balance
    //     });
    //   });
    // });
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
