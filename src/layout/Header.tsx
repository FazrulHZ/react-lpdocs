import React from "react";
import miniLogo from "./../assets/logo.png";
import { Box, Container, HStack, Text } from "@chakra-ui/layout";

const CHeader = () => {
  return (
    <Box p={6} color="#171923" boxShadow="md" bg="white">
      <Container maxW="container.xl">
        <HStack>
          <Box>
            <img src={miniLogo} alt="fireSpot" width="30" height="30" />
          </Box>
          <Box my="auto">
            <HStack>
              <Text fontSize="20" fontWeight="extrabold">
                SimASN
              </Text>
              <Text fontSize="20">- Docs</Text>
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default CHeader;
