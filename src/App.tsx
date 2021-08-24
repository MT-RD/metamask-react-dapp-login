import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import {useWeb3} from '@openzeppelin/network/react';

import Layout from "./components/Layout";
import './App.css';
import AccountTag from "./components/AccountTag";

const infuraProjectId = '17ed6dde97064fa0a4cb79e2835a7a29';

function App() {

  const web3Context = useWeb3(`wss://rinkeby.infura.io/v3/${infuraProjectId}`);

  return (
    <ChakraProvider>
      <Layout>
        {/* Our connect button will only handle opening */}
        <AccountTag title="Web3 Data" web3Context={web3Context} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
