import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './WorkBanner.styled';
import * as G from '../../../styles/global.styled';
import { WorkBannerData } from '../../../utils/dataConfig';

type Props = {};

export const WorkBanner = (props: Props) => {
  const [state, setState] = useState(0);

  setTimeout(() => {
    state >= WorkBannerData.length - 1 ? setState(0) : setState(state + 1);
  }, 2000);

  return (
    <S.BannerWrap>
      <S.Linear />
      <S.WrapBackground>
        <S.Background>
          <S.BackgroundDark />
          <Image
            src='/img/WorkBg.png'
            layout='fill'
            objectFit='cover'
            alt='Work Background'
          />
        </S.Background>
      </S.WrapBackground>
      <G.Container>
        <S.Item>
          <S.Title>
            <S.WhiteTitle>we</S.WhiteTitle>
            {WorkBannerData &&
              !!WorkBannerData.length &&
              WorkBannerData.map((data, index) => (
                <S.GreenTitle
                  key={index}
                  activeTitle={state === index ? true : false}
                >
                  {data.title}
                </S.GreenTitle>
              ))}
          </S.Title>
          <S.SubTitle>
            A diversity of expertise to solve challenges in a unique way with
            creative courage
          </S.SubTitle>
        </S.Item>
      </G.Container>
    </S.BannerWrap>
  );
};
