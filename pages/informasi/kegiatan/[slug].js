import styled from 'styled-components';
import Container from "@/components/container";
import Breadcrumb from '@/components/breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { InlineShareButtons } from 'sharethis-reactjs';


const Flex = styled(Container)`
  display: flex;
  margin: 2rem 0;
  margin-bottom: 5rem;
`;

const Content = styled.div`
  flex: 3;
  margin-right: 2rem;
`;
const Sidebar = styled.aside`
  flex: 1.2;
`;

const SidebarHeading = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  text-align: center;
  font-size: 1.1rem;

  &::after {
    content: '';
    display: block;
    background-image: url('/static/img/underline.svg');
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-top: .5rem;
    height: 6px;
    width: 300px;

  }
`;

const SidebarContent = styled.div`
  position: sticky;
  top: 10px;
`;


const SidebarList = styled.ul`
  padding: 0;
  margin: 0;
  margin: 1rem 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const SidebarItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  border-bottom: 1px dashed #ddd;
  padding: .8rem;

  &:last-child {
    border-bottom: none;
  }

  > a {
    text-decoration: none;
    display: block;

    &:hover {
      color: var(--primary);
    }

  }
`;

const Caption = styled.span`
  display: inline-block;
  font-size: .8rem;
  border: 1px solid #ddd;
  padding: .3rem .4rem;
  border-radius: 3px;
  margin-top: .5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-right: .5rem;

  &:last-child {
    margin-right: 0;
  }

  > svg {
    display: inline-block;
    margin-right: .4rem;
  }

`;

const TagLabel = styled(Caption)`
  background-color: rgba(0%, 58%, 68%, .20);
  border-color: rgba(0%, 58%, 68%, .20);
`;


const PostTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 42px;
  margin: 0;
  margin-bottom: .5rem;
  font-size: 1.8rem;
`;

const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  line-height: 28px;
  margin: 20px 0;

`;

const PostContent = styled.div`
  margin-top: 1rem;
`;

const PostCover = styled(Image)`
  border-radius: 5px;
  display: block;
`;

const PostHeader = styled.div`
  margin-bottom: 1rem;
`;

export default function Kegiatan() {
  return (
    <Container>
      <style global jsx>{`
        .st-inline-share-buttons {
          margin-top: 1.3rem;
        }
      `}
      </style>
      <Breadcrumb
        paths={[
          'Beranda',
          'Informasi',
          'Kegiatan',
          'Ambon'
        ]}
      />
      <Flex>
        <Content>
          <PostHeader>
            <PostTitle>
            KemenKominfo : Perlu Ada Reviu, Untuk Mencegah Tumpang Tindih Tugas Dan Kewenangan Diskominfo
            </PostTitle>
            <Caption>
              <FontAwesomeIcon icon={faUserCheck} />
              Admin
            </Caption>
            <Caption>
              <FontAwesomeIcon icon={faClock} />
              16 Juni 2022
            </Caption>
            <TagLabel>
              kominfo
            </TagLabel>
            <InlineShareButtons
              config={{
                radius: 5,
                show_total: true,
                enabled: true,
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'whatsapp',
                  'email',
                  'messenger',
                  'facebook',
                  'messenger',
                  'blogger'
                ]
               }}
            />
          </PostHeader>

          <PostCover
            src="https://ambon.go.id/wp-content/uploads/2022/06/IMG-20220616-WA0002.jpg"
            alt="cover"
            height="200"
            width="300"
            layout="responsive"
          />
          <PostContent>
            <Paragraph>
            Jakarta,PPID – Tugas dan kewenangan Dinas Komunikasi dan Informatika (Diskominfo) biasanya sering dijalankan dinas dan badan lain.
            Bahkan, dinas dan badan terkait tidak ingin menyerahkan tugas dan fungsi ke Diskominfo. Akibatnya, sering terjadi tumpang tindih di daerah.
            </Paragraph>

            <Paragraph>
            Hal ini disampaikan Direktur Layanan Aplikasi Informatika Pemerintahan Kementerian Kominfo RI (Kemenkominfo), Bambang Dwi Anggono, ketika melakukan pertemuan antara Diskominfo se-Provinsi Maluku dengan Kementerian Kominfo di ruang rapat B. M. Diah lantai. 6, Gedung Kementerian Kominfo, Medan Merdeka Barat, Jakarta Pusat, Rabu (25/6/2022).
            </Paragraph>
            <Paragraph>
            Pertemuan dimaksud merupakan tindak lanjut hasil Rapat Forum OPD Diskominfo kabupaten/kota di Kabupaten Maluku Tenggara, medio April 2022 lalu.

            ”Jadi memang kami sementara menyusun regulasi terkait dengan tugas Dinas Kominfo. Kami berharap tidak ada tumpang tindih dalam kegiatan. Jadi daerah perlu melakukan harmonisasi sesuai aturan yang di buat pusat,” ingatnya.

            Dirinya mengaku, selama ini antar Kementerian tidak terjadi tumpang tindih, tapi kalau di daerah tidak boleh terjadi. ”Perlu ada reviu di Pemda terkait aturan dan pembagian kewenangan antar OPD agar tidak terjadi tumpang tindih sesuai Peraturan yang dikeluarkan pemerintah pusat,”tandasnya.

            Soal pertemuan KemenKominfo dengan Diskominfo se Maluku, dia mengaku, pertemuan ini merupakan silaturahmi yang baik. “Jadi ini bukan pertemuan pertama. Tapi seringkali kami berkomunikasi dengan teman-teman Kominfo Maluku dan Kominfo Kabupaten/Kota di Maluku,”terangnya.

            Apalagi, lanjutnya, pertemuan yang dilakukan untuk mempererat kerjasama lebih lanjut antara pusat dan daerah lebih khusus terkait program-program Kominfo di pusat dan didaerah.
            </Paragraph>

            <Paragraph>
            “Banyak program terkait sarana telekomunikasi untuk memastikan seluruh masyarakat mendapat telekomunikasi yang terbaik. Juga terkait dengan e-goverment yang bisa membantu daerah menjawab tantangan pembiayaan yang terbatas. Sehingga daerah tidak menanggung karena sudah ditanggung Kementerian Kominfo. Kemudian terkait pengalihan Televisi analog ke digital dan juga terkait informatika dan ekonomi digital,”jelasnya.

Tak hanya itu, pertemuan yang digelar juga menjadi sarana untuk sinkronisasi pusat dan daerah agar terjadi kerjasama yang maksimal dan hasilnya bermanfaat bagi masyarakat.

Terkait dukungan Anggaran dari kementerian dalam pelaksanaan tugas dan fungsi Kominfo Provinsi dan kabupaten/kota, Bambang menyatakan bahwa Kementerian Kominfo sementara menyusun anggaran untuk mendukung kegiatan lewat Dana Khusus maupun  dana Dekon dan hal ini sudah menjadi kolaborasi tingkat pusat.

”Jadi Kementerian Kominfo, Kementerian Keuangan, Kemendagri, dan Bapenas serta KemenPAN RB serta pihak-pihak sudah bahas terkait soal skema pembiayaan. Harapanya segera memberikan hasil. Jadi bukan saja pemerintah, tapi pihak legislatif juga,”paparnya

Untuk itu, harapnya, pihaknya memohon dukungan dari Dinas Kominfo seluruh Indonesia, merapatkan barisan untuk satu suara agar dukungan pembiayaan dalam proses transformasi digital didaerah berjalan baik. Transformasi digital bukan saja tanggungjawab pusat tapi juga daerah perlu kita perjuangan bersama-sama,”pungkasnya.
            </Paragraph>

            <Paragraph>
            Ditempat yang sama, Kepala Dinas Komunikasi Informatika dan Persandian Kota Ambon, Joy .R. Adriaansz meminta pihak Kemkominfo untuk membantu memudahkan infrastruktur  jaringan/internet di wilayah Provinsi Maluku.

“Seperti yang kita semua ketahui, provinsi Maluku merupakan daerah Kepulauan, yang transportasinya saja sudah sulit. Mohon kiranya lewat Kemkominfo, untuk membantu mempermudah pembangunan infrastruktur jaringan diwilayah Maluku, sehingga blank spot di wilayah Maluku dapat dikurangi,” pinta Kadis.

Kadis mengaku, untuk wilayah Kota Ambon sendiri sudah mendapat bantuan infrastruktur dari BAKTI bekerjasama dengan desa melalui BUMDES dan disertai dengan pelatihan bagi para operator, sehingga desa yang tadinya sulit terjangkau dengan koneksi internet sudah mulai teratasi.

“Untuk Kota Ambon, kita sudah menjalin kerjasama dengan BAKTI, dimana pihak BAKTI membantu infrakstruktur jaringan serta pelatihan yang diperuntukkan bagi operator pada BUMDES dimulai dari pengkabelan sampai setting perangkat jaringan internet, sehingga kedepan ketika ada masalah pada jaringan, sudah bisa diatasi oleh para operator yang ada di desa,” tutupnya. (MCAMBON/DM)


            </Paragraph>
          </PostContent>
        </Content>
        <Sidebar>
          <SidebarContent>
            <SidebarHeading>
              Kegiatan lainnya
            </SidebarHeading>
            <SidebarList>

                <SidebarItem>
                  <Link href="#" passHref>Klasis GPM Kota Ambon Gelar Talkshow Enterpreneur, Pemkot Beri Apresiasi</Link>
                  <Caption>
                    <FontAwesomeIcon icon={faClock} />
                    30 Juni 2022
                  </Caption>
                </SidebarItem>
                <SidebarItem>
                  <Link href="#" passHref>Lulus Seleksi Administrasi, 38 Calon Tenaga IT Ikuti Tahapan SKB</Link>
                  <Caption>
                    <FontAwesomeIcon icon={faClock} />
                    6 April 2021
                  </Caption>
                </SidebarItem>

            </SidebarList>
          </SidebarContent>
        </Sidebar>
      </Flex>
    </Container>
  );
}