import React from "react";
import miniLogo from "./../assets/logo.png";
import { Box, HStack, Text } from "@chakra-ui/layout";

const CHeader = () => {
  return (
    <Box w="100%" p={6} color="#171923" boxShadow="md">
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
    </Box>
  );
};

export default CHeader;
