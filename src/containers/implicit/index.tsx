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

const Implicit = () => {
  return (
    <Box w="full" p={5}>
      <HStack>
        <Text fontWeight="bold" fontSize="xl">
          Flow Grant Type Implicit
        </Text>
      </HStack>
      <Box mt={3} lineHeight="8">
        Grant type ini biasanya digunakan apabila aplikasi client tidak bisa
        menyimpan nilai client secret dengan aman. Contohnya adalah aplikasi
        JavaScript (misalnya: AngularJS, jQuery, Backbone.js, dsb) yang source
        codenya bisa dilihat umum.
      </Box>
      <Box mt={5}>
        <Center h="100%">
          <img src={flow} alt="oauth_implicit" width="550" />
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
              http://localhost:8090/oauth/authorize?client_id=clientspamobile&response_type=token
            </Box>
          </ListItem>
          <ListItem mb="3">
            Kita akan diredirect ke url yang kita daftarkan pada Resource
            server. URL hasil redirectnya seperti ini :
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              fontSize="12"
            >
              http://example.com/#access_token=9b0d1167-1a25-436b-aff1-b4aa00af9f58&token_type=bearer&expires_in=43199&scope=read%20write
            </Box>
          </ListItem>
          <ListItem mb="3">
            Untuk Keamanan, sebaiknya kita menambahkan nilai variabel{" "}
            <Code>state</Code> pada{" "}
            <b>
              <i>aplikasi client</i>
            </b>
            . Nilai variabel <Code>state</Code> ini disimpan sebagai session
            variable di sisi server aplikasi client. Kita akan gunakan nilai
            variabel <Code>state</Code> ini untuk verifikasi pada langkah
            selanjutnya. Contoh :
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              mb={3}
              fontSize="14"
            >
              http://appclient.com/api/state/xyz123
            </Box>
            Setelah dapat variabel <Code>state</Code> dari request di atas,
            gunakan untuk generate token
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              marginBlock={3}
              fontSize="14"
            >
              http://localhost:8090/oauth/authorize?client_id=clientspamobile&response_type=token&state=xyz123
            </Box>
            Setelah sukses login, authorization server akan melakukan redirect
            ke url yang kita daftarkan, yaitu
            <Code>http://localhost:10001/api/state/verify</Code>. URL ini akan
            ditambahkan hash variable berisi token, sehingga isi lengkapnya
            seperti ini
            <Box
              color="white"
              px={5}
              bg="#4A5568"
              borderRadius="lg"
              mt={3}
              fontSize="14"
            >
              http://appclient.com/api/state/verify#access_token=9b0d1167-1a25-436b-aff1-b4aa00af9f58&token_type=bearer&expires_in=43199&scope=read%20write
            </Box>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Implicit;
