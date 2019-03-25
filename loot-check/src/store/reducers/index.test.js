import rootReducer from './index';

describe('root reducer', () => {
  it('initializes the default state', () => {
    const prevState = {};
    const action = {};

    expect(rootReducer(prevState, action)).toEqual({
      balance: 0,
      bitcoin: {}
    });
  });
});
