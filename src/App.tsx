import * as React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";

import CMenu from "./layout/Menu";
import CMain from "./layout/Main";
import CHeader from "./layout/Header";

export const App = () => (
  <ChakraProvider>
    <CHeader />
    <Container maxW="container.xl">
      <Flex h="100%" mt="35px">
        <BrowserRouter>
          <CMenu />
          <Route component={CMain} />
        </BrowserRouter>
      </Flex>
    </Container>
  </ChakraProvider>
);
