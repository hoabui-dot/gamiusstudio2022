import React from 'react';
import * as S from './Cards.styled';
import Image from 'next/image';
import calender from '../../../../../public/img/calendar.png';
import location from '../../../../../public/img/location.png';
import { BtnDetail } from '../BtnDetail/BtnDetail';

const CardsData = [
  {
    title: '3D Modeling',
    subTitle: '01. 3D',
    content: [
      {
        src: calender,
        alt: 'calender',
        content: 'Parttime',
      },
      {
        src: location,
        alt: 'location',
        content: 'Hồ Chí Minh',
      },
    ],
  },
  {
    title: '3D Modeling',
    subTitle: '01. 3D',
    content: [
      {
        src: calender,
        alt: 'calender',
        content: 'Parttime',
      },
      {
        src: location,
        alt: 'location',
        content: 'Hồ Chí Minh',
      },
    ],
  },
  {
    title: '3D Modeling',
    subTitle: '01. 3D',
    content: [
      {
        src: calender,
        alt: 'calender',
        content: 'Parttime',
      },
      {
        src: location,
        alt: 'location',
        content: 'Hồ Chí Minh',
      },
    ],
  },
];

export const Cards = () => {
  return (
    <>
      {CardsData.map((_data, index) => (
        <S.WrapperCard key={index}>
          <S.SubTitle>01. 3D</S.SubTitle>
          <S.Title>3D Modeling</S.Title>
          <S.WrapperInfo>
            {_data.content.map((_data2, index2) => (
              <S.Info key={index2}>
                <Image
                  className='image'
                  height={20}
                  width={20}
                  src={_data2.src}
                  alt={_data2.alt}
                />
                <S.P__Info>{_data2.content}</S.P__Info>
              </S.Info>
            ))}
          </S.WrapperInfo>
          <BtnDetail />
        </S.WrapperCard>
      ))}
    </>
  );
};
