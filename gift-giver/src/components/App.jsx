import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: []
    };

    this.addGift = this.addGift.bind(this);
    this.removeGift = this.removeGift.bind(this);
  }

  addGift() {
    const { gifts } = this.state;

    gifts.push({
      id: gifts.length + 1
    });

    this.setState({ gifts });
  }

  removeGift(id) {
    const gifts = [...this.state.gifts].filter(gift => gift.id !== id);

    this.setState({ gifts });
  }

  render({ gifts } = this.state) {
    return (
      <div>
        <h2>Gift Giver</h2>

        <div className="gift-list">
          {gifts.map(gift => (
            <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
          ))}
        </div>

        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}
