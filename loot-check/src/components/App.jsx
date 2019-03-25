import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

const App = () => (
  <>
    <h2>Loot Check</h2>
    <hr />
    <Wallet />
    <hr />
    <Loot />
    <div>
      Powered by{' '}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.coindesk.com/price"
      >
        Coindesk
      </a>
    </div>
  </>
);

export default App;
