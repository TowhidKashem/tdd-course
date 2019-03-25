import React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../store/actions/bitcoin';

export class Loot extends React.Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { balance, bitcoin } = this.props.state;

    if (Object.keys(bitcoin).length === 0) return '';

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
      </div>
    );
  }
}

// const mapStateToProps = state => state;
const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = {
  fetchBitcoin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loot);
