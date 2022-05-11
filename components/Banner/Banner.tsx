import React from 'react';
import Image from 'next/image';
import BannerImg from '../../public/img/bannerSLide.png';
import BannerBackground from '../../public/img/bannerBackground.png';
import ImageTest1 from '../../public/img/ourWork2.png';
import ImageTest2 from '../../public/img/ourWork3.png';
import BannerIcon from '../../public/img/BannerIcon.png';
import Ticket from '../../public/img/Ticket.png';
import TicketLight from '../../public/img/TicketLight.png';
import * as B from './Banner.styled';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {Autoplay, Pagination, EffectFade} from 'swiper';

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
    titleGreen: 'create game',
    image: ImageTest1,
    background: ImageTest1,
  },
  {
    titleWhite: 'we',
    titleGreen: 'test game',
    image: ImageTest2,
    background: ImageTest2,
  },
];

export const Banner = (props: BannerProps) => {
  return (
    <Swiper
      loop={true}
      effect={'fade'}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className='mySwiper'
    >
      {BannerData &&
        !!BannerData.length &&
        BannerData.map((data, index) => (
          <SwiperSlide key={index}>
            <B.Banner>
              <B.Background>
                <B.BackgroundDark />
                <Image
                  src={data.background}
                  layout='fill'
                  objectFit='cover'
                  alt='Banner Slide'
                />
              </B.Background>
              <B.BannerItem>
                <B.BannerContent>
                  <B.BannerStatus>
                    <B.Sticked>
                      <Image
                        src={Ticket}
                        layout='responsive'
                        width={1}
                        height={1}
                        alt='Ticket Icon'
                      />
                      <B.StickedLight className={index === 0 ? 'active' : ''}>
                        <Image
                          src={TicketLight}
                          layout='responsive'
                          width={1}
                          height={1}
                          alt='Ticket Icon'
                        />
                      </B.StickedLight>
                    </B.Sticked>
                    <B.Sticked>
                      <Image
                        src={Ticket}
                        layout='responsive'
                        width={1}
                        height={1}
                        alt='Ticket Icon'
                      />
                      <B.StickedLight className={index === 1 ? 'active' : ''}>
                        <Image
                          src={TicketLight}
                          layout='responsive'
                          width={1}
                          height={1}
                          alt='Ticket Icon'
                        />
                      </B.StickedLight>
                    </B.Sticked>
                    <B.Sticked>
                      <Image
                        src={Ticket}
                        layout='responsive'
                        width={1}
                        height={1}
                        alt='Ticket Icon'
                      />
                      <B.StickedLight className={index === 2 ? 'active' : ''}>
                        <Image
                          src={TicketLight}
                          layout='responsive'
                          width={1}
                          height={1}
                          alt='Ticket Icon'
                        />
                      </B.StickedLight>
                    </B.Sticked>
                  </B.BannerStatus>
                  <B.BannerIcon>
                    <Image
                      src={BannerIcon}
                      layout='responsive'
                      width={1}
                      height={1}
                      alt='Banner Icon'
                    />
                  </B.BannerIcon>
                  <B.BannerTitle>
                    <B.TitleWhite>{data.titleWhite}</B.TitleWhite>
                    <B.TitleGreen>{data.titleGreen}</B.TitleGreen>
                  </B.BannerTitle>
                  <B.BannerSubTitle>
                    We embrace <B.GreenColor>challenges</B.GreenColor>, incite{' '}
                    <B.GreenColor>creativity</B.GreenColor> & deliver{' '}
                    <B.GreenColor>powerful designs.</B.GreenColor>
                  </B.BannerSubTitle>
                </B.BannerContent>
                <B.BannerImage>
                  <Image
                    src={data.image}
                    layout='responsive'
                    width={1}
                    height={0.8}
                    alt='Banner Slide'
                  />
                </B.BannerImage>
              </B.BannerItem>
            </B.Banner>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
