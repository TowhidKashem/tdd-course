import * as actionTypes from '../actions/actionTypes';
import { read_cookie, bake_cookie } from 'sfcookies';

const COOKIE_NAME = 'BALANCE_COOKIES';

const initialState = {
  balance: parseInt(read_cookie(COOKIE_NAME), 10) || 0
};

const reducer = (prevState = initialState, action) => {
  let state;

  switch (action.type) {
    case actionTypes.SET_BALANCE:
      state = {
        ...prevState,
        balance: action.balance
      };
      break;
    case actionTypes.DEPOSIT:
      state = {
        ...prevState,
        balance: prevState.balance + action.deposit
      };
      break;
    case actionTypes.WITHDRAW:
      state = {
        ...prevState,
        balance: prevState.balance - action.withdrawl
      };
      break;
    default:
      state = prevState;
  }

  bake_cookie(COOKIE_NAME, state.balance);
  return state;
};

export default reducer;
