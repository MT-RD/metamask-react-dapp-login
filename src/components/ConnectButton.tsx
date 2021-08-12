import {useEtherBalance, useEthers} from "@usedapp/core";
import {Box, Button, Text} from "@chakra-ui/react";
import {formatEther} from "@ethersproject/units";
import Identicon from "./Identicon";

type Props = {
  handleOpenModal: any;
}

// @ts-ignore
function ConnectButton({handleOpenModal}) {
  const {activateBrowserWallet, account} = useEthers();
  const etherBalance = useEtherBalance(account);

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {/* etherBalance will be an object, so we stringify it */}
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>
        <Button
          onClick={handleOpenModal}
          bg="gray.800"
          border="1px solid transparent"
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: "blue.400",
            backgroundColor: "gray.700",
          }}
          borderRadius="xl"
          m="1px"
          px={3}
          height="38px"
        >
          <Text color="white" fontSize="md" fontWeight="medium" mr="2">
            {/* check account is defined and then slice the string */}
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}
              `
            }
          </Text>
          {/* Add the newly imported Identicon component */}
          <Identicon />
        </Button>
      </Box>
  ): (
    <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
  );
}



export default ConnectButton;