import React from "react";
import * as S from "./OurWork.styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper";

import work1 from '../../../public/img/ourWork1.png';
import work2 from '../../../public/img/ourWork2.png';
import work3 from '../../../public/img/ourWork3.png';

export const OurWork = () => {
  return (
    <div>
      <S.FooterContainer>
        <S.WrapperSwiper>
          <Swiper
            pagination={true}
            effect={'fade'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            className='mySwiper'
          >
            <SwiperSlide>
              <S.WrapperImage>
                <Image src={work1} alt={'ourWork1'} width={16} height={9} layout={'responsive'}/>
              </S.WrapperImage>
            </SwiperSlide>
            <SwiperSlide>
            <S.WrapperImage>
            <Image src={work2} alt={'ourWork1'} width={16} height={9} layout={'responsive'}/>
              </S.WrapperImage>
            </SwiperSlide>
            <SwiperSlide>
            <S.WrapperImage>
            <Image src={work3} alt={'ourWork1'} width={16} height={9} layout={'responsive'}/>
              </S.WrapperImage>
            </SwiperSlide>
          </Swiper>
          <S.TitleSwiper>
            UI Design
          </S.TitleSwiper>
        </S.WrapperSwiper>
      </S.FooterContainer>
    </div>
  );
};
