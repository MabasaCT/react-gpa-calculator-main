import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/layout";

import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TermsContainer } from "./components/TermsContainer";

function App({ Component }) {
  return (
    <ChakraProvider theme={theme}>
      <Box className="App">
        <Flex minH="100vh" flexDir="column" justifyContent="space-between">
          <Box>
            <Header />
            <TermsContainer />
          </Box>
          <Footer />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
