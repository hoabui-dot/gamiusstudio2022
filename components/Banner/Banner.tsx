import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './Banner.styled';
import * as G from '../../styles/global.styled';
import { HomeBannerData } from '../../utils/dataConfig';
import { StatusIcon } from './components/StatusIcon/StatusIcon';

export const Banner = () => {
  const [state, setState] = useState(0);

  setTimeout(() => {
    state >= HomeBannerData.length - 1 ? setState(0) : setState(state + 1);
  }, 2000);

  return (
    <S.BannerWrap>
      <S.Linear></S.Linear>
      {HomeBannerData &&
        !!HomeBannerData.length &&
        HomeBannerData.map((data, index) => (
          <S.Background key={index} activeBg={state === index ? true : false}>
            <S.BackgroundDark />
            <Image
              src={data.background}
              layout='fill'
              objectFit='cover'
              alt={data.subBackground}
            />
          </S.Background>
        ))}
      <G.Container>
        <S.Item>
          <S.Content>
            <S.Title>
              <S.WhiteTitle>we</S.WhiteTitle>
              {HomeBannerData &&
                !!HomeBannerData.length &&
                HomeBannerData.map((data, index) => (
                  <S.GreenTitle
                    key={index}
                    activeTitle={state === index ? true : false}
                  >
                    {data.title}
                  </S.GreenTitle>
                ))}
            </S.Title>
            <S.SubTitle>
              <S.BannerStatus>
                {[...Array(HomeBannerData.length)].map((item, index) => (
                  <StatusIcon key={index} active={state === index} />
                ))}
              </S.BannerStatus>
              <S.BannerIcon>
                <Image
                  src='/img/BannerIcon.png'
                  layout='responsive'
                  width={0.76}
                  height={1}
                  alt='Banner Icon'
                />
              </S.BannerIcon>
              <S.SubTitleWrap>
                <S.SubTitleLine>
                  We embrace <S.GreenWord>challenges</S.GreenWord>, incite{' '}
                  <S.GreenWord>creativity</S.GreenWord> & deliver{' '}
                </S.SubTitleLine>
                <S.SubTitleLine>
                  <S.GreenWord>powerful designs.</S.GreenWord>
                </S.SubTitleLine>
              </S.SubTitleWrap>
            </S.SubTitle>
          </S.Content>
          {HomeBannerData &&
            !!HomeBannerData.length &&
            HomeBannerData.map((data, index) => (
              <S.Image key={index} activeImage={state === index ? true : false}>
                <Image
                  layout='responsive'
                  width={1}
                  height={0.8}
                  src={data.image}
                  alt={data.subImage}
                />
              </S.Image>
            ))}
        </S.Item>
      </G.Container>
    </S.BannerWrap>
  );
};
