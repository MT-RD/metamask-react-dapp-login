import React from 'react';
import { useWeb3 } from '@openzeppelin/network/react';

import Layout from "./components/Layout";
import './App.css';
const infuraProjectId = '17ed6dde97064fa0a4cb79e2835a7a29';

function App() {

  const web3Context = useWeb3(`wss://rinkeby.infura.io/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName } = web3Context;

  return (
    <Layout>
      <div className="App">
        <div>
          <h1>Infura/MetaMask/OpenZeppelin Dapp</h1>
          <div>
            Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
          </div>
          <div>
            Provider: {providerName}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
