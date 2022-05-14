import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './Banner.styled';
import * as G from '../../styles/global.styled';
import { BannerData } from '../../utils/dataConfig';

export const Banner = () => {
  const [state, setState] = useState(0);

  setTimeout(() => {
    state >= BannerData.length - 1 ? setState(0) : setState(state + 1);
  }, 2000);

  return (
    <S.BannerWrap>
      <S.Linear></S.Linear>
      {BannerData &&
        !!BannerData.length &&
        BannerData.map((data, index) => (
          <S.Background key={index} className={state === index ? 'active' : ''}>
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
              {BannerData &&
                !!BannerData.length &&
                BannerData.map((data, index) => (
                  <S.GreenTitle
                    key={index}
                    className={state === index ? 'active' : ''}
                  >
                    {data.title}
                  </S.GreenTitle>
                ))}
            </S.Title>
            <S.SubTitle>
              <S.BannerStatus>
                <S.StatusIcon>
                  <Image
                    src='/img/Ticket.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Ticket Icon'
                  />
                  <S.StatusIconLight className={state === 0 ? 'active' : ''}>
                    <Image
                      src='/img/TicketLight.png'
                      layout='responsive'
                      width={1}
                      height={1}
                      alt='Ticket Icon'
                    />
                  </S.StatusIconLight>
                </S.StatusIcon>
                <S.StatusIcon>
                  <Image
                    src='/img/Ticket.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Ticket Icon'
                  />
                  <S.StatusIconLight className={state === 1 ? 'active' : ''}>
                    <Image
                      src='/img/TicketLight.png'
                      layout='responsive'
                      width={1}
                      height={1}
                      alt='Ticket Icon'
                    />
                  </S.StatusIconLight>
                </S.StatusIcon>
                <S.StatusIcon>
                  <Image
                    src='/img/Ticket.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Ticket Icon'
                  />
                  <S.StatusIconLight className={state === 2 ? 'active' : ''}>
                    <Image
                      src='/img/TicketLight.png'
                      layout='responsive'
                      width={1}
                      height={1}
                      alt='Ticket Icon'
                    />
                  </S.StatusIconLight>
                </S.StatusIcon>
              </S.BannerStatus>
              <S.BannerIcon>
                <Image
                  src='/img/BannerIcon.png'
                  layout='responsive'
                  width={0.8}
                  height={1}
                  alt='Banner Icon'
                />
              </S.BannerIcon>
              <S.SubTitleWrap>
                We embrace <S.GreenWord>challenges</S.GreenWord>, incite{' '}
                <S.GreenWord>creativity</S.GreenWord> & deliver{' '}
                <S.GreenWord>powerful designs.</S.GreenWord>
              </S.SubTitleWrap>
            </S.SubTitle>
          </S.Content>
          {BannerData &&
            !!BannerData.length &&
            BannerData.map((data, index) => (
              <S.Image key={index} className={state === index ? 'active' : ''}>
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
