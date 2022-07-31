import Head from 'next/head';
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '@/components/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PostIntroduction from '@/components/post-introduction';
import CovidIntroduction from '@/components/covid-introduction';
import AnnouncementToolbar from '@/components/announcement-toolbar';
import Announcement from '@/components/announcement';
import Divider from '@/components/divider';
import Post from '@/components/post';
import Container from '@/components/container';
import useWeather from '@/utils/weather';
import weatherConditionId from '@/lang/weather-condition-id';
import Blockqoute from '@/components/blockqoute';
import Collapse from '@/components/collapse';


const title = 'Pemerintah Kota Ambon &#8211; Laman resmi Dinas komunikasi, informatika dan persandian kota Ambon';

const WeatherContent = styled.div`
  display: flex;
  padding-top: 1.5rem;
  margin-bottom: 20px;
`;
const WeatherIcon = styled(Image)`

  display: inline-block;
`;
const WeatherText = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .9rem;
  font-weight: 500;
  color: white;
  margin: 0;
  margin-left: .2rem;
  margin-top: .7rem;

  > span {
    position: relative;
    display: inline-block;
    color: white;
    margin-right: .3rem;
    &::after {
      position: absolute;
      content: '';
      height: 2px;
      width: 2px;
      border: 1px solid white;
      border-radius: 50%;
      display: inline-block;
      top: 2px;
      right: -0.3125rem;

    }
  }
`;

const CoverImage = styled(Image)`
  border-radius: 7px;
  width: 100%;
  margin: 10px 0;
  object-fit: cover;
`;

const List = styled.ul`
  list-style: numeric;
  // padding: 0;
`;
const ListItem = styled.li`
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BlockqouteContentText = styled.p`
  line-height: 28px;
  color: white;
`;

const BlockqouteItem = styled.div`
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const HeadlineWelcome = styled.div`
  background-color: royalblue;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Headline = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
`;
const SubHeadline = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: center;
  color: white;
`;

const HeadlineLink = styled.a`
  background: transparent;
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  border: 1px solid white;
  padding: .9rem 1.5rem;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    background-color: white;
    color: royalblue;

    svg > path {
      color: royalblue;
    }
  }
  > svg {
    width: 20px;
    display: inline-block;
    position: relative;
    top: 3.6px;
    left: 4px;

    > path {
      color: white;
    }
  }
`;


const BlockTagHealdine = styled.span`
  background-color: dodgerblue;
  border-radius: 3px;
  padding: .3rem;
  margin-right: .3rem;
  color: white;
  font-weight: 500;
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;


const Footer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
  height: 800px;
`;
const FooterTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  color: var(--primary);
`;
const FooterSubTitle = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: 2rem;
`;

const CollapseArea = styled.div`
  width: 56.25rem;
  margin: 0 auto;
`;



const polices = [
  'Konsolidasi Internal Birokrasi',
  'Penataan Manajemen Pengelolaan Keuangan dan Aset Daerah',
  'Identifikasi Data & Penyelesaian Hutang',
  'Sinkronisasi Program Penurunan Angka Kemiskinan',
  'Peningkatan Pendapatan Asli Daerah (PAD)',
  'Peningkatan Kualitas Pelayanan Publik',
  'Peningkatan Layanan Perizinan dan Non Perizinan yang Terintegrasi',
  'Penyelarasan Arah Kebijakan Pembangunan Kota Ambon dengan Pemerintah Pusat dan Provinsi Maluku',
  'Perwujudan Ambon Bersih',
  'Fasilitas Pemilihan Walikota dan Wakil Walikota Ambon Tahun 2024 serta Menjaga Netralitas ASN',
  'Mendukung Kebijakan Pemerintah Pusat dan Provinsi Maluku dalam Penanganan Pandemi Covid-19',
];


export default function Home() {

  const [{ location, current }, loading] = useWeather();

  return (
    <>
      <style global jsx>{`
        .blockqoute__policies {
          margin-top: 6rem;
        }
        .blockqoute__policies > h2, .blockqoute__policies  p, .blockqoute__policies span {
          color: var(--dark);
        }
      `}
      </style>
      <Head>
        <title>
          {title}
        </title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeadlineWelcome>
        <Container>
          <WeatherContent>
            { loading ? (
              <>
                <Skeleton height={30} width={50}/>
                <Skeleton height={30} style={{ marginLeft: 10 }} width={300}/>
              </>
            ) : (
              <>
                <div style={{
                    width: 40,
                    height: 40,
                    position: "relative",
                  }}>
                  <WeatherIcon
                    src={'http:'+ current.condition.icon}
                    alt="weather icon"
                    width={40}
                    height={40}
                    layout="fixed"
                  />
                </div>
                <WeatherText>
                  <span>{current.feelslike_c}</span>
                  C kondisi cuaca {location.name}, {location.region} {location.country} saat ini {
                    weatherConditionId[current.condition.text]
                  }.
                </WeatherText>
              </>
            )}
          </WeatherContent>
        </Container>
        <FlexCenter>
          <Container>
              <Headline>Make Ambon Healthy, Safe, and Productive</Headline>
              <SubHeadline><BlockTagHealdine>#kenaldulu</BlockTagHealdine> bersama Dinas Komunikasi, Informatika dan Persandian kota Ambon wujudkan Teknologi untuk semua.</SubHeadline>
              <center>
                <HeadlineLink>
                  Mulai kenalan dulu
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </HeadlineLink>
              </center>
          </Container>
          </FlexCenter>
      </HeadlineWelcome>



      <Blockqoute>
        <BlockqouteItem>
          <Blockqoute.Heading>
            11 Kebijakan Prioritas Pemerintah kota Ambon
          </Blockqoute.Heading>
          <Blockqoute.Content>
            <List>
            {polices.map((item, i) =>
              <ListItem key={i}>{item}</ListItem>
            )}
            </List>
          </Blockqoute.Content>
          <Blockqoute.Caption>
            Drs. BODEWIN M. WATTIMENA, M.Si - PEJABAT WALIKOTA AMBON
          </Blockqoute.Caption>
        </BlockqouteItem>
        <BlockqouteItem className="blockqoute__policies">
          <Blockqoute.Heading>
            Makmulat Pelayanan
          </Blockqoute.Heading>
          <Blockqoute.Content>
            <BlockqouteContentText>
            Dengan ini, kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai peraturan perundangan-undangan yang berlaku.
            </BlockqouteContentText>
          </Blockqoute.Content>
          <Blockqoute.Caption>
            Drs. J. R. ADRIAANSZ, M.Si - KEPALA DINAS KOMUNIKASI INFORMATIKA & PERSANDIAN KOTA AMBON
          </Blockqoute.Caption>
        </BlockqouteItem>
      </Blockqoute>


      <br/>
      <br/>

      <CovidIntroduction/>

      <Container>
        <AnnouncementToolbar>
          {[...Array(3)].map(i =>
            <Announcement key={i} />
          )}
        </AnnouncementToolbar>
      </Container>


      <Divider
        title="Informasi kegiatan lainnya"
        subtitle="Kumpulan informasi kegiatan terkini"
      />

      <Container>
        {
          [...Array(3)].map(i =>
            <Post key={i}/>
          )
        }
      </Container>

      <Footer>
        <Container>
          <FlexCenter>
            <FooterTitle>Sebelum kamu pergi yakin ga punya pertanyaan?</FooterTitle>
            <Image src="/static/img/footer-end.webp" layout="responsive" height="100" width="100" alt="FAQ"/>
            <FooterSubTitle>Temukan FAQ tentang kami atau dapat hubungi kami melalui email</FooterSubTitle>
          </FlexCenter>

          <CollapseArea>
            <Collapse>
              <Collapse.Item title="Ini website untuk keperluan apa?">
                Halo content Collapse
              </Collapse.Item>
              <Collapse.Item title="Apa bedanya dengan website Pemerintah kota Ambon?">
                Halo content Collapse
              </Collapse.Item>
              <Collapse.Item title="Bagaimana untuk melakukan perlaporan layanan Pemerintah kota Ambon?">
                Halo content Collapse
              </Collapse.Item>
            </Collapse>
          </CollapseArea>
        </Container>
      </Footer>
    </>
  );
}
