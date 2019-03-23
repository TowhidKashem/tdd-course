import * as actionTypes from '../actions/actionTypes';

const initialState = {
  balance: 0
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BALANCE:
      return {
        ...prevState,
        balance: action.balance
      };
    case actionTypes.DEPOSIT:
      return {
        ...prevState,
        balance: prevState.balance + action.deposit
      };
    case actionTypes.WITHDRAW:
      return {
        ...prevState,
        balance: prevState.balance - action.withdrawl
      };

    default:
      return prevState;
  }
};

export default reducer;
