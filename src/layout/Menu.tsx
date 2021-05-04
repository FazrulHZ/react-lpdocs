import React from "react";

import { Link as ReachLink } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

const CMenu = () => {
  return (
    <Box w="350px" h="80vh" p={4} overflowY="scroll">
      <HStack>
        <Link
          as={ReachLink}
          to="/"
          color="white"
          rounded="lg"
          fontWeight="bold"
          bg="#4A5568"
          py={1}
          px={2}
          mt={3}
          w="100%"
          _hover={{ textDecor: "none" }}
          _focus={{ outline: "none" }}
        >
          Home
        </Link>
      </HStack>
      <HStack>
        <Link
          as={ReachLink}
          to="/authorizationcode"
          rounded="lg"
          fontWeight="bold"
          color="#1A202C"
          py={1}
          px={2}
          mt={3}
          w="100%"
          _hover={{ textDecor: "none" }}
          _focus={{ outline: "none" }}
        >
          Authorization Code
        </Link>
      </HStack>
      <HStack>
        <Link
          as={ReachLink}
          to="/userpassword"
          rounded="lg"
          fontWeight="bold"
          color="#1A202C"
          py={1}
          px={2}
          mt={3}
          w="100%"
          _hover={{ textDecor: "none" }}
          _focus={{ outline: "none" }}
        >
          User Password
        </Link>
      </HStack>
      <HStack>
        <Link
          as={ReachLink}
          to="/implicit"
          rounded="lg"
          fontWeight="bold"
          color="#1A202C"
          py={1}
          px={2}
          mt={3}
          w="100%"
          _hover={{ textDecor: "none" }}
          _focus={{ outline: "none" }}
        >
          Implicit
        </Link>
      </HStack>
      <HStack>
        <Link
          as={ReachLink}
          to="/clientcredentials"
          rounded="lg"
          fontWeight="bold"
          color="#1A202C"
          py={1}
          px={2}
          mt={3}
          w="100%"
          _hover={{ textDecor: "none" }}
          _focus={{ outline: "none" }}
        >
          Client Credentials
        </Link>
      </HStack>
    </Box>
  );
};

export default CMenu;
