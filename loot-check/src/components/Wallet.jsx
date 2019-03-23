import React from 'react';
import * as actions from '../store/actions/balance';
import { connect } from 'react-redux';

export class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
    this.updateBalance = this.updateBalance.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  updateBalance(event) {
    this.setState({ balance: parseInt(event.target.value.trim(), 10) });
  }

  deposit() {
    this.props.deposit(this.state.balance);
  }

  withdraw() {
    this.props.withdraw(this.state.balance);
  }

  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
        <input
          type="text"
          onChange={this.updateBalance}
          className="input-wallet"
        />
        <button onClick={this.deposit} className="btn-deposit">
          Deposit
        </button>
        <button onClick={this.withdraw} className="btn-withdraw">
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deposit: balance => dispatch(actions.deposit(balance)),
    withdraw: balance => dispatch(actions.withdraw(balance))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
