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

const Authcode = () => {
  return (
    <Box w="full" p={5}>
      <HStack>
        <Text fontWeight="bold" fontSize="xl">
          Flow Grant Type Authorization Code
        </Text>
      </HStack>
      <Box mt={3} lineHeight="8">
        Grant type ini digunakan untuk aplikasi client yang bisa menyimpan nilai
        client secret. Contohnya adalah aplikasi server side (PHP, Java) atau
        aplikasi desktop/mobile yang bisa dicompile. Nilai client secret bisa
        kita simpan sebagai variabel yang tidak bisa dilihat umum.
      </Box>
      <Box mt={5}>
        <Center h="100%">
          <img src={flow} alt="oauth_auth_code" width="550" />
        </Center>
      </Box>
      <Box mt={5} lineHeight="8">
        <UnorderedList px="10">
          <ListItem mb="3">
            Buka browser, arahkan ke :
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              fontSize="14"
            >
              http://localhost:8090/oauth/authorize?client_id=clientwebbased&response_type=code&redirect_uri=http://example.com
            </Box>
          </ListItem>
          <ListItem mb="3">
            Kita akan diredirect ke url yang kita sebutkan pada variabel{" "}
            <Code>redirect_uri</Code> di langkah pertama di atas dengan
            ditambahi parameter authorization <Code>code</Code> . URL hasil
            redirectnya seperti ini:
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              fontSize="14"
            >
              http://example.com?code=COntoH
            </Box>
          </ListItem>
          <ListItem mb="3">
            Lakukan request dari aplikasi client untuk menukar authorization{" "}
            <Code>code</Code> dengan <Code>access_token</Code> :
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              fontSize="14"
            >
              POST :
              /oauth/token?grant_type=authorization_code&code=COntoH&redirect_uri=http://example.com{" "}
              <br />
              Host : localhost:8090 <br />
              Content-Type : application/x-www-form-urlencoded <br />
              Authorization : Basic Y29udG9oOmNvbnRvaA==
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
  "access_token":"08664d93-41e3-473c-b5d2-f2b30afe7053",
  "token_type":"bearer",
  "refresh_token":"436761f1-2f26-412b-ab0f-bbf2cd7459c4",
  "expires_in":43199,
  "scope":"write read"
}`}
              fontSize="14"
            />
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Authcode;
