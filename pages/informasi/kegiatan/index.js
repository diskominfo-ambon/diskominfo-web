import styled from 'styled-components';
import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import Post from '@/components/post';


const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
`;
const Subtitle = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
  margin-top: .5rem;
`;
const Content = styled.div`
  margin: 5rem 0;
  margin-top: 2rem;
`;

const Posts = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 4rem;
  list-style: none;
`;
const PostItem = styled.li`
  border-bottom: 1px dashed #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export default function Index() {
  return (
    <Container>
      <Breadcrumb
        paths={[
          'Beranda',
          'Informasi',
          'Kegiatan'
        ]}
      />
      <Content>
        <center>
          <Title>Informasi kegiatan</Title>
          <Subtitle>
            Semua informasi kegiatan Dinas komunikasi informatika dan persandian kota Ambon
          </Subtitle>
        </center>

        <Posts>
          <Post
            title="Klasis GPM Kota Ambon Gelar Talkshow Enterpreneur, Pemkot Beri Apresiasi"
            photoUrl="https://ambon.go.id/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-30-at-13.23.57.jpeg"
            date="30 Juni 2022"
            description="AMBON,PPID – Pemerintah Kota (Pemkot) Ambon memberi apresiasi terhadap kegiatan Talkshow Enterpreneur yang dilaksanakan Tim Pengembangan Ekonomi Klasis GPM Kota Ambon, Kamis (30/6/2022) di Gereja Bethania, jalan Jend. A. Yani- Kelurahan Batu Meja."
          />
          <Post
            title="KemenKominfo : Perlu Ada Reviu, Untuk Mencegah Tumpang Tindih Tugas Dan Kewenangan Diskominfo"
            photoUrl="https://ambon.go.id/wp-content/uploads/2022/06/IMG-20220616-WA0002.jpg"
            date="16 Juni 2022"
            description="Jakarta,PPID – Tugas dan kewenangan Dinas Komunikasi dan Informatika (Diskominfo) biasanya sering dijalankan dinas dan badan lain. Bahkan, dinas dan badan terkait tidak ingin menyerahkan tugas dan fungsi ke Diskominfo. Akibatnya, sering terjadi tumpang tindih di daerah."
          />
          <Post
            title="Lulus Seleksi Administrasi, 38 Calon Tenaga IT Ikuti Tahapan SKB"
            photoUrl="https://ambon.go.id/wp-content/uploads/2021/04/DSC09944.jpg"
            date="6 April 2021"
            description="Ambon,PPID – Sebanyak 38 orang calon tenaga Informasi Teknologi (IT) di lingkup Pemerintah Kota (Pemkot) Ambon mengikuti Seleksi Kompetensi Bidang (SKB). Kegiatan ini digelar Selasa, (6/4/2021) di Hotel Pasific."
          />
        </Posts>
      </Content>
    </Container>
  );
}