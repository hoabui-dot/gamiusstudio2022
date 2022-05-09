import React from 'react';
import Image from 'next/image';
import BannerImg from '../../public/img/bannerSlide.png';
import BannerBackground from '../../public/img/bannerBackground.png';
import * as B from './Banner.styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface BannerProps {}

export const BannerData = [
  {
    titleWhite: 'we',
    titleGreen: 'design game',
    image: BannerImg,
    background: BannerBackground,
  },
  {
    titleWhite: 'we',
    titleGreen: 'create anything',
    image: BannerImg,
    background: BannerBackground,
  },
  {
    titleWhite: 'we',
    titleGreen: 'test game',
    image: BannerImg,
    background: BannerBackground,
  },
];

export const Banner = (props: BannerProps) => {
  return (
    <>
      <Swiper>
        {BannerData &&
          !!BannerData.length &&
          BannerData.map((data, index) => (
            <SwiperSlide key={index}>
              <B.Banner>
                <B.Background>
                    <Image
                      src={data.background}
                      layout='fill'
                      objectFit='contain'
                      alt='Banner Slide'
                    />
                </B.Background>
              </B.Banner>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
