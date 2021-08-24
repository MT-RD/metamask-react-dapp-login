import {Box, Heading, Text} from "@chakra-ui/react";

// @ts-ignore
function AccountTag(props) {

  console.log(props)
  const {networkId, networkName, providerName} = props.data;

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
        w="50%"
      >
        <Text color="white" fontSize="md">
          {/* etherBalance will be an object, so we stringify it */}
          Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
        </Text>
        <Text color="white" fontSize="md">
          Provider: {providerName}
        </Text>
      </Box>
    </Box>
  );
}

export default AccountTag;