import React from "react";

import flow from "../../assets/flow/oauth_client_credentials.png";

import {
  Box,
  Center,
  Code,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";

const Credentials = () => {
  return (
    <Box w="full" p={5}>
      <HStack>
        <Text fontWeight="bold" fontSize="xl">
          Flow Grant Type Client Credentials (WS)
        </Text>
      </HStack>
      <Box mt={3} lineHeight="8">
        Pada flow type ini, aplikasi client diberikan akses penuh terhadap
        resource yang diproteksi tanpa perlu meminta username dan password user.
        Biasanya digunakan bila aplikasi client dan aplikasi resource server
        dibuat oleh perusahaan yang sama.
      </Box>
      <Box mt={5}>
        <Center h="100%">
          <img src={flow} alt="oauth_implicit" width="550" />
        </Center>
      </Box>
      <Box mt={5} lineHeight="8">
        <UnorderedList px="10">
          <ListItem mb="3">
            Request token ke Authorization server dengan memasang{" "}
            <Code>client_id</Code> dan
            <Code>client_secret</Code> pada header dengan cara{" "}
            <b>Basic Authentication</b>
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              fontSize="14"
            >
              POST : /oauth/token <br />
              Host : localhost:8090 <br />
              Content-Type : application/x-www-form-urlencoded <br />
              Authorization : Basic Y29udG9oOmNvbnRvaA== <br />
              Body : grant_type=client_credentials
            </Box>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Credentials;
