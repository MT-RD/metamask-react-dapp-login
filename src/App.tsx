import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <p style={{color: "white"}}>Hello, world!</p>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
