import * as actionTypes from './actionTypes';

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: actionTypes.FETCH_BITCOIN,
          bitcoin: data
        })
      );
  };
};
