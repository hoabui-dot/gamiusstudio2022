import React from 'react';
import * as S from './OurWork.styled';
import * as G from '../../../styles/global.styled';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination } from 'swiper';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { OurWorkData } from '../../../utils/dataConfig';
import { FlashBackground } from './components/Flash/Flash';

export const OurWork = () => {
  return (
    <S.OurWork className='background-net'>
      <G.Container>
        <SectionTitle
          title='Recent works'
          subTitle='Follow our journey of bringing bold ideas to life in the real world'
        />
        <S.InnerSwiper>
          <FlashBackground />
          <S.WrapperSwiper>
            <Swiper
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination]}
              className='mySwiper'
            >
              {OurWorkData.map((_data, index) => (
                <SwiperSlide key={index}>
                  <S.WrapperImage>
                    <Image
                      src={_data.image}
                      alt={_data.alt}
                      width={2}
                      height={1}
                      layout={'responsive'}
                      objectFit={'fill'}
                    />
                  </S.WrapperImage>
                </SwiperSlide>
              ))}
            </Swiper>
            <S.TitleSwiper>3D Modeling</S.TitleSwiper>
          </S.WrapperSwiper>
        </S.InnerSwiper>
      </G.Container>
    </S.OurWork>
  );
};
