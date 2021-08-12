import {useEtherBalance, useEthers} from "@usedapp/core";
import {Box, Button, Text} from "@chakra-ui/react";
import {formatEther} from "@ethersproject/units";

function ConnectButton() {
  const {activateBrowserWallet, account} = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box>
      <Text color="white" fontSize="md">
        {/* etherBalance will be an object, so we stringify it */}
        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
      </Text>
    </Box>
  ): (
    <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
  );
}



export default ConnectButton;