import React from "react";

import flow from "../../assets/flow/oauth_auth_code.png";

import {
  Box,
  Center,
  Code,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";

const Userpass = () => {
  return (
    <Box w="full" p={5}>
      <HStack>
        <Text fontWeight="bold" fontSize="xl">
          Flow Grant Type User Password
        </Text>
      </HStack>
      <Box mt={3} lineHeight="8">
        Grant type ini biasanya digunakan bila pembuat aplikasi client sama
        dengan pembuat resource server. Sehingga aplikasi client diperbolehkan
        mengambil data username dan password langsung dari user. Contohnya:
        aplikasi Twitter android ingin mengakses daftar tweet untuk user
        tertentu. Walaupun demikian, penggunaan flow type ini tidak
        direkomendasikan lagi. Sebaiknya gunakan flow type authorization code
        atau client credentials.
      </Box>
      <Box mt={5}>
        <Center h="100%">
          <img src={flow} alt="oauth_password" width="550" />
        </Center>
      </Box>
      <Box mt={5} lineHeight="8">
        <UnorderedList px="10">
          <ListItem mb="3">
            Request token ke <b>Authorization server</b> :
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              fontSize="14"
            >
              POST :
              /oauth/token?client_id=mobileapp&grant_type=password&username=ismailpomalingo&password=rahasia{" "}
              <br />
              Host : localhost:8090 <br />
              Content-Type : application/x-www-form-urlencoded <br />
              Authorization : BasicY29udG9oOmNvbnRvaA==
            </Box>
          </ListItem>
          <ListItem mb="3">
            Kita akan diberikan <Code>access_token</Code> dalam response JSON
            seperti ini :
            <Code
              whiteSpace="pre"
              display="block"
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              children={`{
  "access_token": "b714480d-6fc6-4f71-bdce-c3442e3ef897",
  "token_type": "bearer",
  "refresh_token": "145122d2-e620-4eb9-a420-56082493a27d",
  "expires_in": 43199,
  "scope": "read write admin"
}`}
              fontSize="14"
            />
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Userpass;
