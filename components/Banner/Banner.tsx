import React, {useState} from 'react';
import Image from 'next/image';
import * as S from './Banner.styled';
import * as G from '../../styles/global.styled';
import {HomeBannerData} from '../../utils/dataConfig';
import {WorkBannerData} from '../../utils/dataConfig';
import Home from '../../pages';
import {BannerImage} from './components/BannerImage/BannerImage';
import {StatusIcon} from './components/StatusIcon/StatusIcon';

export interface BannerProps {
  Banner?: boolean;
  SubTitle?: string;
}

export const Banner = ({Banner, SubTitle}: BannerProps) => {
  const [state, setState] = useState(0);

  // setTimeout(() => {
  //   state >= HomeBannerData.length - 1 ? setState(0) : setState(state + 1);
  // }, 2000);

  return (
    <S.BannerWrap>
      <S.Linear></S.Linear>
      {Banner ? (
        <S.WrapBackground>
          <S.Background activeBg={Banner ? true : false}>
            <S.BackgroundDark />
            <Image
              src='/img/WorkBg.png'
              layout='fill'
              objectFit='cover'
              alt='Work Background'
            />
          </S.Background>
        </S.WrapBackground>
      ) : (
        HomeBannerData &&
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
        ))
      )}
      <G.Container>
        <S.Item>
          <S.Content>
            <S.Title textCenterTitle={Banner ? true : false}>
              <S.WhiteTitle>we</S.WhiteTitle>
              {Banner
                ? WorkBannerData &&
                  !!WorkBannerData.length &&
                  WorkBannerData.map((data, index) => (
                    <S.GreenTitle
                      key={index}
                      activeTitle={state === index ? true : false}
                    >
                      {data.title}
                    </S.GreenTitle>
                  ))
                : HomeBannerData &&
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
            <S.SubTitle textCenter={Banner ? true : false}>
              <S.BannerStatus hiddenStatus={Banner ? true : false}>
                <S.StatusIcon>
                  <Image
                    src='/img/Ticket.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Ticket Icon'
                  />
                  <S.StatusIconLight
                    activeIconLight={state === 0 ? true : false}
                  >
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
                  <S.StatusIconLight
                    activeIconLight={state === 1 ? true : false}
                  >
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
                  <S.StatusIconLight
                    activeIconLight={state === 2 ? true : false}
                  >
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
              <S.BannerIcon hiddenIcon={Banner ? true : false}>
                <Image
                  src='/img/BannerIcon.png'
                  layout='responsive'
                  width={0.76}
                  height={1}
                  alt='Banner Icon'
                />
              </S.BannerIcon>
              {Banner ? (
                <S.SubTitleWrap textCenter={Banner}>{SubTitle}</S.SubTitleWrap>
              ) : (
                <S.SubTitleWrap textCenter={false}>
                  <S.SubTitleLine>
                    We embrace <S.GreenWord>challenges</S.GreenWord>, incite{' '}
                    <S.GreenWord>creativity</S.GreenWord> & deliver{' '}
                  </S.SubTitleLine>
                  <S.SubTitleLine>
                    <S.GreenWord>powerful designs.</S.GreenWord>
                  </S.SubTitleLine>
                </S.SubTitleWrap>
              )}
            </S.SubTitle>
          </S.Content>
          {Banner
            ? ''
            : HomeBannerData &&
              !!HomeBannerData.length &&
              HomeBannerData.map((data, index) => (
                <S.Image
                  key={index}
                  activeImage={state === index ? true : false}
                >
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

export const BannerAbout = () => {
  const [state, setState] = useState(0);

  setTimeout(() => {
    state >= HomeBannerData.length - 1 ? setState(0) : setState(state + 1);
  }, 2000);

  return (
    <S.BannerAbout>
      <G.Container>
        <S.Item>
          <S.Content>
            <S.Title>
              <S.WhiteTitle className='mt-2'>WE WERE HERE FOR</S.WhiteTitle>
              {HomeBannerData.map((data, index) => (
                <S.GreenTitle
                  key={index}
                  activeTitle={state === index ? true : false}
                >
                  {data.title}
                </S.GreenTitle>
              ))}
              <S.BannerStatus inline={true}>
                {[...Array(HomeBannerData.length)].map((item, index) => (
                  <StatusIcon key={index} active={state === index} />
                ))}
              </S.BannerStatus>
            </S.Title>
            <p className='lg:mt-[60px] mt-[20px] text-base font-medium text-white lg:text-left text-center'>
              Gamius is is a full-service design agency, based in Ho Chi Minh
              city, Vietnam. We produce creative designs tailor-made for your
              vision to keep you at the top of your game.
            </p>
          </S.Content>
          <S.ImageWrap>
            {HomeBannerData.map((data, index) => (
              <BannerImage key={index} data={data} active={state === index} />
            ))}
          </S.ImageWrap>
        </S.Item>
      </G.Container>
    </S.BannerAbout>
  );
};
