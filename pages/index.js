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

import BlockqouteNotice from '@/components/blockqoute-notice';
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


const title = 'Pemerintah Kota Ambon &#8211; Laman resmi Dinas komunikasi, informatika dan persandian kota Ambon';

const WeatherContent = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 20px;
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

  > span {
    position: relative;
    display: inline-block;
    color: var(--primary);
    margin-right: .3rem;
    &::after {
      position: absolute;
      content: '';
      height: 2px;
      width: 2px;
      border: 1px solid var(--primary);
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
                <span>{current.feelslike_c}</span>
                C kondisi cuaca {location.name}, {location.region} {location.country} saat ini {
                  weatherConditionId[current.condition.text]
                }.
              </WeatherText>
            </>
          )}
        </WeatherContent>

        <CoverImage src="/static/img/cover.jpg" alt="cover homepage" layout="responsive" height="190" width="500" />
        


        {/* posts swiper */}
        <Swiper
          navigation
          pagination
          spaceBetween={40}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
        <style global jsx>{`
          .swiper-button-disabled {
            opacity: 0 !important;
          }
          .swiper-button-next, .swiper-button-prev {
            background-color: white;
            border-radius: 40px;
            width: 50px;
            height: 50px;
            top: 50px !important;
          }
          .swiper-button-next {
            left: 30px;
          }

          .swiper-button-prev  {
            left: -15px;
          }


          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 1.5rem;
          }
          .swiper-pagination {
            left: -575px !important;
            bottom: 40px !important;
            position: absolute;
          }

          .swiper-pagination .swiper-pagination-bullet {
            height: 13px;
            width: 13px;
          }

          .mySwiper {
            position: relative;
          }
        `}
        </style>
          {[...Array(3)].map(i =>
            <SwiperSlide key={i}>
              <PostIntroduction/>
            </SwiperSlide>
          )}
        </Swiper>

        {/* end */}
      </Container>


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
        <BlockqouteItem>
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
      <Container>
        <CovidIntroduction/>
      </Container>

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
    </>
  );
}
