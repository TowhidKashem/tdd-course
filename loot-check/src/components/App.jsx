import React from 'react';
import Wallet from './Wallet';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Loot Check</h2>
        <hr />
        <Wallet />
      </div>
    );
  }
}
