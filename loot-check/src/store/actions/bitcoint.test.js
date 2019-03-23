import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import * as actionTypes from './actionTypes';
import * as actions from './bitcoin';

const initialState = {
  bitcoin: {}
};

const middlewares = [thunk];
const createMockStore = configureMockStore(middlewares);
const store = createMockStore(initialState);

// This is oversimplified since all we are testing for is the response body to contain a `bpi` key,
// ...it's value and all the other keys in the response body aren't important
const mockResponse = {
  body: {
    bpi: 'foobar'
  }
};

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse
);

it('creates an async action to fetch the bitcoin value', () => {
  const expectedActions = [
    {
      type: actionTypes.FETCH_BITCOIN,
      bitcoin: mockResponse.body
    }
  ];

  return store.dispatch(actions.fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
