import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Loot } from './Loot';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Loot />', () => {
  const mockFetchBitcoin = jest.fn();
  let props = {
    balance: 10,
    bitcoin: {},
    fetchBitcoin: mockFetchBitcoin
  };
  let loot = shallow(<Loot {...props} />);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    it('dispatches the `fetchBitcoin` method it recieves from mapDispatchToProps', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = {
        ...props,
        balance: 10,
        bitcoin: {
          bpi: {
            USD: {
              rate: '1,000'
            }
          }
        }
      };
      loot = shallow(<Loot {...props} />);
    });

    it('displays the correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    });
  });
});
