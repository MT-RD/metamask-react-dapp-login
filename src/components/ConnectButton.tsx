import {useEtherBalance, useEthers} from "@usedapp/core";
import {Box, Button, Text} from "@chakra-ui/react";

function ConnectButton() {
  const {activateBrowserWallet, account} = useEthers();
  const etherBalance = useEtherBalance(account);

  return account ? (
    <Box>
      <Text color="white" fontSize="md">
        {etherBalance && etherBalance} ETH
      </Text>
    </Box>
  ): (
    <Button>Connect to a wallet</Button>
  );
}

export default ConnectButton;