import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './Banner.styled';
import * as G from '../../styles/global.styled';

export const BannerData = [
  {
    title: 'design game',
    image: '/img/BannerImg1.png',
    subImage: 'Product',
    background: '/img/BannerBackground1.png',
    subBackground: 'Background',
  },
  {
    title: 'create 3d modeling',
    image: '/img/BannerImg2.png',
    subImage: 'Product',
    background: '/img/BannerBackground2.png',
    subBackground: 'Background',
  },
  {
    title: 'create animation',
    image: '/img/BannerImg3.png',
    subImage: 'Product',
    background: '/img/BannerBackground3.png',
    subBackground: 'Background',
  },
];

export const Banner = () => {
  const [state, setState] = useState(0);

  setTimeout(() => {
    state >= BannerData.length - 1 ? setState(0) : setState(state + 1);
  }, 2000);

  return (
    <S.BannerWrap>
      <S.Linear></S.Linear>
      {BannerData.map((data, index) => (
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
              {BannerData.map((data, index) => (
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
                <S.Sticked>
                  <Image
                    src='/img/Ticket.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Ticket Icon'
                  />
                  <S.StickedLight className={state === 0 ? 'active' : ''}>
                    <Image
                      src='/img/TicketLight.png'
                      layout='responsive'
                      width={1}
                      height={1}
                      alt='Ticket Icon'
                    />
                  </S.StickedLight>
                </S.Sticked>
                <S.Sticked>
                  <Image
                    src='/img/Ticket.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Ticket Icon'
                  />
                  <S.StickedLight className={state === 1 ? 'active' : ''}>
                    <Image
                      src='/img/TicketLight.png'
                      layout='responsive'
                      width={1}
                      height={1}
                      alt='Ticket Icon'
                    />
                  </S.StickedLight>
                </S.Sticked>
                <S.Sticked>
                  <Image
                    src='/img/Ticket.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Ticket Icon'
                  />
                  <S.StickedLight className={state === 2 ? 'active' : ''}>
                    <Image
                      src='/img/TicketLight.png'
                      layout='responsive'
                      width={1}
                      height={1}
                      alt='Ticket Icon'
                    />
                  </S.StickedLight>
                </S.Sticked>
              </S.BannerStatus>
              <S.SubTitleWrap>
                We embrace <S.GreenWord>challenges</S.GreenWord>, incite{' '}
                <S.GreenWord>creativity</S.GreenWord> & deliver{' '}
                <S.GreenWord>powerful designs.</S.GreenWord>
              </S.SubTitleWrap>
            </S.SubTitle>
          </S.Content>
          {BannerData.map((data, index) => (
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
