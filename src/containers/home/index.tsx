import React from "react";
import { Box, HStack, ListItem, Text, UnorderedList } from "@chakra-ui/layout";

const Home = () => {
  return (
    <Box w="full" p={5}>
      <Box w="full" p={5} bg="#EDF2F7">
        Halaman ini berisi petunjuk integrasi aplikasi Anda dengan SSO Badan
        Kepegawaian Daerah Provinsi Gorontalo. Baca dengan detail setiap langkah
        sehingga tidak ada yang terlewat. Informasi lebih lanjut mengenai hal
        ini dapat ditanyakan langusng ke <b>Prakom BKD</b>.
      </Box>

      <HStack mt="20">
        <Text fontWeight="bold" fontSize="xl">
          PENGANTAR
        </Text>
      </HStack>

      <Box mt={3} lineHeight="8">
        SSO Badan Kepegawaian Daerah Provinsi Gorontalo, dirancang khusus untuk
        memudahkan para pengembang dalam melakukan integrasi. Didukung oleh SDK
        dalam berbagai bahasa pemograman sehingga mempersingkat penulisan code
        pada proses integrasi. Sebelum mengikuti petunjuk di halaman ini,
        pastikan Anda mendaftarkan aplikasi yang akan diintegrasikan ke{" "}
        <b>Badan Kepegawaian Provinsi Gorontalo</b>.
      </Box>

      <Box mt={3} lineHeight="8">
        Beberapa hal yang perlu dipahami developer mengenai SSO, sehingga tidak
        menimbulkan kesalahpahaman:
        <UnorderedList px="10">
          <ListItem>
            SSO utamanya hanya meng-handle login dan logout, walaupun secara
            opsional juga dapat dilakukan untuk melakukan pengecekan apakah user
            masih login atau tidak.
          </ListItem>
          <ListItem>
            SSO bukanlah single session, masing-masing aplikasi tetap menyimpan
            session setelah proses login berhasil.
          </ListItem>
          <ListItem>
            SSO dapat diimplimentasikan pada aplikasi sebagai opsional login,
            sehingga tidak perlu menghilangkan login yang sudah ada.
          </ListItem>
          <ListItem>
            SSO tidak menyebabkan hak akses tidak terkontrol, karena proses
            pengecekan hak akses tetap bisa dilakukan di sisi aplikasi setelah
            proses login SSO.
          </ListItem>
          <ListItem>
            SSO dapat diintegrasikan pada aplikasi existing tanpa melakukan
            banyak perubahan code.
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Home;
