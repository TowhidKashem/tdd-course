import bitcoinReducer from './bitcoin';
import * as actions from '../actions/actionTypes';

describe('bitcoin reducer', () => {
  it('fetches and sets the bitcoin data', () => {
    const prevState = {};

    const bitcoinData = {
      bpi: 'foobar'
    };

    const expectedAction = {
      type: actions.FETCH_BITCOIN,
      bitcoin: bitcoinData
    };

    expect(bitcoinReducer(prevState, expectedAction)).toEqual(bitcoinData);
  });
});
