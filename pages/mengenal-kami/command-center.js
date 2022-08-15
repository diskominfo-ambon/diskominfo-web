import styled from 'styled-components';
import Layout from '@/components/mengenal-kami/layout';


const Iframe = styled.iframe`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 500px;
  border-radius: 6px;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  text-align: justify;
`;
const Content = styled.div``;

const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: .8rem;
  display: block;
`;


const Blackqoute = styled(Paragraph)`
  font-style: italic;
  border-left: 6px solid var(--light);
  padding-left: .8rem;
`;

export default function CommandCenter() {
  return (
    <Layout breadcrumb="Command Center">
      <Content>
        <Heading>
         Informasi Command Center pemerintah kota Ambon
        </Heading>
        <Iframe
          src='https://www.youtube.com/embed/-Y2o8VmBlVA?autoplay=1&mute=1'
          frameBorder='0'
          allow='autoplay; encrypted-media; accelerometer; gyroscope'
          allowFullScreen
          title='Command center introduction'
        />
        <Paragraph>
          Ambon, PPID – Walikota Ambon, Richard Louhenapessy, pada momentum Upacara Peringatan HUT Ke- 446 Kota Ambon 7 September 2021 lalu, di Lapangan Merdeka telah meresmikan Command Center Pemerintah Kota (Pemkot) Ambon.
        </Paragraph>
        <Blackqoute>
          Sebenarnya apa fungsi dari Command Center yang dikelola oleh Dinas Komunikasi Informatika dan Persandian Kota Ambon tersebut?
        </Blackqoute>

        <Paragraph>
          Command Center merupakan pusat visualisasi dan integrasi data Kota Ambon yang dilengkapi dengan berbagai infrastruktur untuk kegiatan monitoring, koordinasi & pengambilan keputusan. Command Center bertempat di kawasan Jl. Sultan Hairun No. 1 Gd. C Lt. 4 kantor Balai kota Ambon Gedung A.
        </Paragraph>

        <Heading>
         SOP Kunjungan Command Center
        </Heading>
        <Image src="/static/img/SOP_COMMAND CENTER_PEMKOT_AMBON-2.jpg"/>

        <Heading>
         SOP Permintaan Data pada Command Center
        </Heading>
        <Iframe
          src='/static/SOP_PERMINTAAN_DATA_COMMAND CENTER_PEMKOT_AMBON-.pdf'
          frameBorder='0'
          allow='autoplay; encrypted-media; accelerometer; gyroscope'
          allowFullScreen
          title='Command center introduction'
        />

      </Content>
    </Layout>
  );
}