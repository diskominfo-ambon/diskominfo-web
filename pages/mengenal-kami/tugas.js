import styled from 'styled-components';
import Layout from "@/components/mengenal-kami/layout";
import { useEffect, useState } from 'react';

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

  const [data, setData] = useState({});

  useEffect(() => {


    (async function () {
      const endpoint = 'http://127.0.0.1:8000/api/application?key=task';

      const res = await fetch(endpoint)
      const result = await res.json();
      console.log({result, endpoint});
      setData(result);
    })()

  }, []);

  console.log({data});


  return (
    <Layout breadcrumb="Tugas dan fungsi">
      <Heading>
        Bagian Seksi Persandian
      </Heading>
      <Paragraph>
        Dalam melaksanakan tugasnya, menyelenggarakan fungsi
      </Paragraph>
      <List>
        <ListItem>Melaksanakan pengawasan terhadap penyelengaraan sistem informasi dan komunikasi, pemberdayaan aplikasi persandian</ListItem>
        <ListItem>Melaksanakan pembinaan terhadap penyelengaraan sistem informasi dan persandian</ListItem>
        <ListItem>Menyelenggarakan kegiatan pendiddikan dan pelatihan sumber daya aparatur pengelolah persandian</ListItem>
        <ListItem>Membangun koordinasi lintas intansi penyelenggara persandian</ListItem>
        <ListItem>Melakukan pengawasan/pengendalian terhadap penyelenggara persandian</ListItem>
        <ListItem>Menyelenggarakan perencaanaan dan pelaksanaan kegiatan pengamanan </ListItem>
        <ListItem>Memberdayakan peralatan dandi dan telekomunikasi</ListItem>
        <ListItem>Mengawasi dan mengevaluasi pengiriman, penerimaan dan penyampaian berita-berita sandi dan berita-berita lainnya</ListItem>
        <ListItem>Menganalisis dan mengatur jaringan hubungan komunikasi</ListItem>
        <ListItem>Mengevaluasi dan melaporkan pelaksanaan kegiatan persandian</ListItem>
        <ListItem>Melaksanakan tugas lain yang diberikan oleh kepala bidang Teknologi informasi, Persandian dan Statistik terkait dengan tugas dan fungsinya</ListItem>
      </List>
      <Heading>
        Bagian Seksi Statistik
      </Heading>
      <Paragraph>
        Dalam melaksanakan tugasnya, menyelenggarakan fungsi
      </Paragraph>
      <List>
        <ListItem>Menyusuan rencana kegiatan pengolahan data dan informasi berbasis Teknologi Informasi dan Komunikasi (TIK)</ListItem>
        <ListItem>Melaksanakan pengumpulan dan pengolahan data dan statistik bidang teknologi informasi Pemerintah kota</ListItem>
        <ListItem>Melaksanakan analisis dan penyajian data statistik pemanfaatan teknologi informasi publik</ListItem>
        <ListItem>Melaksanakan pengolahan dan anlisa data serta penyusunan rencana pengembangan rencana e-Goverment</ListItem>
        <ListItem>Menyusun standar operasional prosedur di bidang pengolahan data statistik dan sistem informasi manajemen Pemerintah Kota</ListItem>
        <ListItem>Menyajikan data dan infomasi di bidang pelayanan publik berbasis e-Goverment</ListItem>
        <ListItem>Menyiapkan bahan pemantauan evaluasi dan pelaporan yang berkaitan dengan statistik</ListItem>
        <ListItem>Melaksanaakan koordinasi dengan unit kerja terkait dan Melaksanaakan tugas lain yang  diberikan oleh Kepala Bidang Teknologi Informasi, Persandian dan Statistik terkait dengan tugas dan fungsinya</ListItem>
      </List>

      <Heading>
        Bidang Pengelolaan Informasi dan Komunikasi Publik
      </Heading>
      <Paragraph>
        Dalam melaksanakan tugasnya, menyelenggarakan fungsi
      </Paragraph>
      <List>
        <ListItem>Pelaksanaan kebijakan teknis bidang</ListItem>
        <ListItem>Pelaksanaan program dan kegiatan</ListItem>
        <ListItem>Pembinaan, pengkoordinasian, pengendalian dan pengawasan program dan kegiatan dalam lingkup bidang</ListItem>
        <ListItem>Pelaksanaan fungsi lain yang diberikan oleh kepala Dinas komunikasi Informatika dan Persandian terkait dengan tugas dan fungsinya</ListItem>
      </List>


    </Layout>
  );
}