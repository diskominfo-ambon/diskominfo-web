import Head from 'next/head';
import styled from 'styled-components'

import BlockqouteNotice from '@/components/blockqoute-notice';
import GovermentGoals from '@/components/government-goals';
import PostIntroduction from '@/components/post-introduction';
import Divider from '@/components/divider';
import Post from '@/components/post';
import Container from '@/components/container';


const title = 'Pemerintah Kota Ambon &#8211; Laman resmi Dinas komunikasi, informatika dan persandian kota Ambon';


const Section = styled.div``;



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
        <Container>
          <PostIntroduction/>
        </Container>
      </Section>

      <Section>
        <BlockqouteNotice/>
      </Section>

      <Section>
        <Divider
          title="Tujuan visi dan misi"
          subtitle="Tujuan visi dan misi diskominfo pemerintah kota"
        />
        <GovermentGoals/>
      </Section>

      <Section>
        <Divider
          title="Informasi kegiatan lainnya"
          subtitle="Kumpulan informasi kegiatan terkini"
        />

        <Container>
          {
            [1,2,3,4,5].map(i =>
              <Post key={i}/>
            )
          }
        </Container>

      </Section>
    </div>
  );
}
