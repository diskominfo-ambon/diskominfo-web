import styled from 'styled-components';
import Layout from "@/components/mengenal-kami/layout";


const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  margin: 0;
`;
const List = styled.ul`
  list-style: numeric;
`;
const ListItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: .9rem;
`;

export default function Tugas() {
  return (
    <Layout breadcrumb="Tugas dan fungsi">
      <Paragraph>
        Dinas Komunikasi, Informatika &  Persandian Kota Ambon  erbentuk  berdasarkan Peraturan Walikota (PERWALI) Kota Ambon Nomor 38 Tahun 2016, tentang Organisasi dan Tata Kerja Dinas Kota Ambon
      </Paragraph>
      <Heading>
        Tugas
      </Heading>
      <Paragraph>Membantu Walikota melaksanakan penyusunan dan pelaksanaan  kebijakan di  bidang  komunikasi informatika dan persandian.</Paragraph>

      <Heading>
        Fungsi
      </Heading>
      <List>
        <ListItem>Perumusan  kebijakan  teknis  urusan  pemerintahan  di  bidang  komunikasi  informatika dan persandian</ListItem>
        <ListItem>Pelaksanaan kebijakan di bidang komunikasi informatika dan persandian</ListItem>
        <ListItem>Pelaksanaan evaluasi dan pelaporan di bidang komunikasi informatika dan persandian</ListItem>
        <ListItem>Pelaksanaan administrasi dinas</ListItem>
        <ListItem>Pelaksanaan fungsi lain yang diberikan oleh Walikota terkait dengan tugas dan fungsinya</ListItem>
      </List>
    </Layout>
  );
}