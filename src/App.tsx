import * as React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { Box, ChakraProvider, Container, Flex } from "@chakra-ui/react";

import CMenu from "./layout/Menu";
import CMain from "./layout/Main";
import CHeader from "./layout/Header";

export const App = () => (
  <ChakraProvider>
    <Box position="fixed" top={0} w="full">
      <CHeader />
    </Box>
    <Container maxW="container.xl">
      <Flex h="100%" mt="120px">
        <BrowserRouter>
          <Box w="350px">
            <CMenu />
          </Box>
          <Box w="full">
            <Route component={CMain} />
          </Box>
        </BrowserRouter>
      </Flex>
    </Container>
  </ChakraProvider>
);
