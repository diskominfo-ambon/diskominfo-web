import Head from 'next/head';
import styled from 'styled-components'

import BlockqouteNotice from '@/components/blockqoute-notice';
import Divider from '@/components/divider';

const title = 'Pemerintah Kota Ambon &#8211; Laman resmi Dinas komunikasi, informatika dan persandian kota Ambon';



const WeatherText = styled.p``;
const Section = styled.div``;
const SectionTitle = styled.h2``;
const SectionSubtitle = styled.p``;

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <WeatherText>Informasi cuaca</WeatherText>
      </Section>

      <Section>
        <BlockqouteNotice/>
      </Section>

      <Section>

      </Section>

      <Section>
        <Divider
          title="Kebutuhan layanan"
          subtitle="Semua kebutuhan layanan Anda"
        />


      </Section>
      <Section>
        <Divider
          title="Informasi  berita lainnya"
          subtitle="Kumpulan informasi dan berita terkini"
        />

      </Section>
    </div>
  );
}
