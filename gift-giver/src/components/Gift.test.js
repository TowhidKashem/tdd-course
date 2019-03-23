import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Gift from './Gift';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Gift Component', () => {
  const mockRemove = jest.fn();
  const giftId = 1;
  const props = {
    gift: {
      id: giftId,
      removeGift: mockRemove
    }
  };
  const gift = shallow(<Gift {...props} />);

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes and person and present in `state`', () => {
    expect(gift.state()).toEqual({
      person: '',
      present: ''
    });
  });

  describe('when typing into the person input', () => {
    const personName = 'Uncle';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', {
        target: {
          value: personName
        }
      });
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(personName);
    });
  });

  describe('when typing into the present input', () => {
    const giftName = 'Golf Clubs';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', {
        target: {
          value: giftName
        }
      });
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(giftName);
    });
  });

  // describe('when clicking the `Remove Gift` button', () => {
  //   beforeEach(() => {
  //     gift.find('.btn-remove').simulate('click');
  //   });

  //   it('executes the `removeGift` callback', () => {
  //     expect(mockRemove).toHaveBeenCalledWith(giftId);
  //   });
  // });
});
