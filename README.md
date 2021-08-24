# Send React Web3 Transactions via MetaMask with useDApp

Send real transactions via our React DApp, both reading from & writing to an Ethereum smart-contract written in `Solidify`

By this time, you'll already know how to connect an Ethereum account to a DApp. 
In this branch, we will be interacting with and change the state of the Ethereum network!


## Objectives

* How to write a basic smart contract in Solidity
* How to deploy that contract to a test network
* How to import that contract into a frontend
* How to read from & write to that contract

## Package versions

* `react: ^17.0.2`
* `typescript: ^4.3.5`
* `@usedapp/core: ^0.4.4`
* `@chakra-ui/react: ^1.6.6`

In addition, we'll make use of `Solidity > 0.5` and the [Remix Solidity online editor](https://remix.ethereum.org/)

## 1. Create and Deploy a Smart Contract via Remix

- Create a simple smart contract using the online editor Remix: https://remix.ethereum.org/.
- Make sure to be connected to the Rinkeby network (via MetaMask), then navigate to the File Explorer tab, click on `contracts` and create a new file called `SimpleContract.sol`:
 
  
  ![GitHub Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9bzlrqm02eoblnqg2rxj.png)

- `Solidty` - it's essentially an object-oriented language with JavaScript-like syntax, where `class` is `contract`.

Inside`SimpleContract.sol`, add the following code:

```solidity
pragma solidity > 0.5; // pragma is always required

contract SimpleContract {
    uint256 public count;
    
    function incrementCount() public {}
    
    function setCount(uint256 _count) public {}
}
```

In the above code, we are initializing a variable called `count` as a `uint256` integer type. When we declare this variable, it is automatically set to 0.

## Step 2: Import our Contract & Read a Value

We're using the `useDapp` framework in our app to provide a clean abstraction
for interacting with the Ethereum network, and they provide the 
`useContractCall` and `useContractCalls` hooks to make custom calls to a 
smart contract.

In order to interact with a smart contract from our Dapp, we need two things: 
the `contract address` and an `ABI (application binary interface)`.

## Useful links

<table>
<tr>
    <td>@metamask/jazzicon</td>
    <td>https://classic.yarnpkg.com/en/package/@metamask/jazzicon</td>
</tr>
<tr>
    <td>framer-motion</td>
    <td>https://yarnpkg.com/package/framer-motion</td>
</tr>
</table>




