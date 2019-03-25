import * as actionTypes from '../actions/actionTypes';
import { read_cookie, bake_cookie } from 'sfcookies';

const COOKIE_NAME = 'BALANCE_COOKIES';

const initialState = parseInt(read_cookie(COOKIE_NAME), 10) || 0;

const reducer = (prevState = initialState, action) => {
  let balance;

  switch (action.type) {
    case actionTypes.SET_BALANCE:
      balance = action.balance;
      break;
    case actionTypes.DEPOSIT:
      balance = prevState + action.deposit;
      break;
    case actionTypes.WITHDRAW:
      balance = prevState - action.withdrawl;
      break;
    default:
      balance = prevState;
  }

  bake_cookie(COOKIE_NAME, balance);
  return balance;
};

export default reducer;
