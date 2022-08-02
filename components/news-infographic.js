import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import useFetch from '@/utils/fetch';

import Image from './image';
import Container from './container';


const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--primary);
`;

const Content = styled.div`
  margin-top: 3rem;
`;

const ContentPlaceholder = styled.div`
  background-color: #eee;
  height: 340px;
  width: 300px;
  border-radius: 4px;
`;

export default function NewsInfographic() {

  const [loading, resp] = useFetch({ path: "/infographics" })

  return (
    <Container>
      <Heading>Infografis Dinas komunikasi, informatika dan persandian kota Ambon</Heading>
      <Content>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation
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
            top: 170px !important;
            z-index: 2000;
            box-shadow: 0 3px 8px #eee;

          }
          // .swiper-button-next {
          //   left: 30px;
          // }
          // .swiper-button-prev  {
          //   left: -15px;
          // }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 1.5rem;
          }
          .swiper-pagination {
            left: 12px !important;
            bottom: 15px !important;
            position: absolute;
            background-color: white;
            border-radius: 5px;
            width: max-content !important;
            display: inline-block;
            box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
          }
          .swiper-pagination .swiper-pagination-bullet {
            height: 10px;
            width: 10px;
          }
          .mySwiper {
            position: relative;
          }
        `}
        </style>

          {
            loading
              ? <SwiperPlaceholder/>
              : (
                resp?.data?.map(data =>
                  <SwiperSlide key={data.id}>
                    <div style={{
                      height: 340,
                      width: 300
                     }}>
                      <Image src={data.picture_url} alt={data.title} height={340} width={300} />
                    </div>
                  </SwiperSlide>
                )
              )
          }
        </Swiper>
      </Content>
    </Container>
  );
}

const SwiperPlaceholder = () => <>{Array(10).fill(1).map(i => <SwiperSlide key={i}><ContentPlaceholder/></SwiperSlide> )}</>;