import {Box, Heading, Text, Button} from "@chakra-ui/react";
import {useCallback} from "react";

// @ts-ignore
function AccountTag(props) {

  const {web3Context} = props;
  console.log(props)
  const {networkId, networkName, accounts, providerName} = web3Context;

  const requestAuth = async (web3Context: any) => {
    try {
      await web3Context.requestAuth()
    } catch (e) {
      console.error(e);
    }
  }

  const requestAccess = useCallback(() => requestAuth(web3Context), [])

  return (
    <Box
      alignItems="center"
      flexDirection="row"
      borderRadius="xl"
      py="0"
    >

      <Heading
        color="white"
        mt="1"
        fontWeight="semibold"
        as="h5"
        lineHeight="tight"
        isTruncated
      >
        {`Infura/MetaMask/OpenZeppelin Dapp`}
      </Heading>

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        background="gray.700"
        borderRadius="xl"
        py="0"
        mt="5"
        p="5"
      >
        <Text color="white" fontSize="md">
          {/* etherBalance will be an object, so we stringify it */}
          Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
        </Text>
        <Text color="white" fontSize="md">
          Provider: {providerName}
        </Text>

        <Text color="white" fontSize="md">
          Your address: {accounts && accounts.length > 0 ? accounts[0] : 'Unknown'}
        </Text>

        {accounts && accounts.length ? (
          <Text color="white" fontSize="md">
            Accounts & Signing Status: Access Granted
          </Text>
        ) : !!networkId && providerName !== 'infura' ? (
          <Text color="white" fontSize="md">
            <Button onClick={requestAccess}>Request Access</Button>
          </Text>
        ) : (
          <Text/>
        )}
      </Box>
    </Box>
  );
}

export default AccountTag;