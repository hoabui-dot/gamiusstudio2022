import React from 'react';
import * as S from './OurWork.styled';
import * as SG from '../../KeyMessage/KeyMessage.styled';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination } from 'swiper';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { OurWorkData } from '../../../utils/dataConfig';

export const OurWork = () => {
  return (
    <SG.BackgroundSquare>
      <SectionTitle
        title='Recent works'
        subTitle='Follow our journey of bringging bold ideas to life in the real world'
      />
      <S.Container>
        <S.WrapperSwiper>
          <Swiper
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className='mySwiper'
          >
            {OurWorkData.map((_data, index) => (
              <SwiperSlide>
                <S.WrapperImage>
                  <Image
                    src={_data.image}
                    alt={_data.alt}
                    width={16}
                    height={9}
                    layout={'responsive'}
                  />
                </S.WrapperImage>
              </SwiperSlide>
            ))}
          </Swiper>
          <S.TitleSwiper>UI Design</S.TitleSwiper>
        </S.WrapperSwiper>
      </S.Container>
    </SG.BackgroundSquare>
  );
};
