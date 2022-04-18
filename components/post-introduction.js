import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faClock, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FlexRow = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;
`;

const ImageContent = styled.div`
  flex: 2;
`;
const ImageCover = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
`;
const Content = styled.div`
  flex: 1.5;
  margin-right: 1rem;

  > a {
    font-size: 1rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    margin-top: .3rem;
    display: inline-block;
    text-decoration: none;
    color: var(--primary);
  }
`;
const Title = styled.h1`
  display: block;
  margin: 0;
  margin-bottom: 1rem;
  color: var(--primary);
  font-size: 1.9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;
const Caption = styled.span`
  margin-right: .4rem;
  border: 1px solid #ddd;
  display: inline-block;
  padding: .2rem .4rem;
  border-radius: 3px;
  font-size: .8rem;
  font-weight: 400;
  font-family: 'Plus Jakarta Sans', sans-serif;

  &:nth-child(4) {
    margin-left: .4rem;
  }

  > svg  {
    margin-right: .3rem;
    display: inline-block;

    > path {
      fill: var(--light);
    }

  }`;
const Description = styled.p`
  line-height: 29px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;


export default function PostIntroduction() {
  return (
    <Swiper
      navigation
      pagination
      effect="fade"
      spaceBetween={40}
      slidesPerView={1}
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
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
      {[1,2,3].map(i =>
        <SwiperSlide key={i}>
          <FlexRow>
            <Content>
              <Title>Halo ini judul</Title>
              <>
                <Caption>
                  <FontAwesomeIcon icon={faUserCheck} />
                  Admin
                </Caption>
                <Caption>
                  <FontAwesomeIcon icon={faClock} />
                  12 Januari 2000
                </Caption>
                -
                <Caption>
                  <FontAwesomeIcon icon={faHashtag} />
                  kominfo
                </Caption>
              </>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Description>

              <Link href="/i">Baca selengkapnya</Link>
            </Content>
            <ImageContent>
              <ImageCover
                src="https://images.unsplash.com/photo-1644982652061-df82282e178d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="cover"
                height="200"
                width="300"
                layout="responsive"
              />

            </ImageContent>
          </FlexRow>
        </SwiperSlide>
      )}
    </Swiper>
  );
}