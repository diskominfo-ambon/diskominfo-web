import Head from 'next/head';
import styled from 'styled-components'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import BlockqouteNotice from '@/components/blockqoute-notice';
import PostIntroduction from '@/components/post-introduction';
import Announcement from '@/components/announcement';
import Divider from '@/components/divider';
import Post from '@/components/post';
import Container from '@/components/container';
import useWeather from '@/utils/weather';


const title = 'Pemerintah Kota Ambon &#8211; Laman resmi Dinas komunikasi, informatika dan persandian kota Ambon';

const WeatherContent = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;
const WeatherIcon = styled(Image)`
  margin-right: .5rem;
  display: inline-block;
`;
const WeatherText = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  font-weight: 500;
  color: var(--primary);
  margin: 0;
  margin-left: .5rem;
  margin-top: .6rem;
`;



export default function Home() {

  const [{ location, current }, loading] = useWeather();
  console.log({location, current, loading});
  console.log('home');
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <WeatherContent>
          { loading ? (
            <>
              <Skeleton height={30} width={50}/>
              <Skeleton height={30} style={{ marginLeft: 10 }} width={300}/>
            </>
          ) : (
            <>
              <WeatherIcon
                src={'http:'+ current.condition.icon}
                alt="weather icon"
                height="40"
                width="40"
                layout="fixed"
              />
              <WeatherText>
                Kondisi cuaca {location.name}, {location.region} {location.country} saat ini
              </WeatherText>
            </>
          )}
        </WeatherContent>

        <PostIntroduction/>
      </Container>

      <BlockqouteNotice/>

      <Container>
        <Announcement/>
      </Container>

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
    </>
  );
}
