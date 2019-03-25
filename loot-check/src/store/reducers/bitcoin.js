import * as actions from '../actions/actionTypes';

const initialState = {};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return prevState;
  }
};

export default reducer;
