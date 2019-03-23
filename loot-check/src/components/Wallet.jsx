import React from 'react';
// import * as actions from '../actions/balance';
import { connect } from 'react-redux';

export class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setBalance: balance => dispatch(actions.setBalance())
//   };
// };

export default connect(
  mapStateToProps,
  null
)(Wallet);
