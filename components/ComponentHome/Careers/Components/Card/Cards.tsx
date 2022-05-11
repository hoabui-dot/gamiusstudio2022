import React from 'react';
import * as S from './Cards.styled';
import Image from 'next/image';
import calender from '../../../../../public/img/calendar.png';
import location from '../../../../../public/img/location.png';
import { BtnDetail } from '../BtnDetail/BtnDetail';

export const Cards = () => {
  return (
    <S.WrapperCard>
      <S.SubTitle>01. 3D</S.SubTitle>
      <S.Title>3D Modeling</S.Title>
      <S.WrapperInfo>
        <S.Info>
          <Image
            className='image'
            height={20}
            width={20}
            src={calender}
            alt='calender'
          />
        </S.Info>
        <S.P__Info>Parttime</S.P__Info>
        <S.Info>
          <Image
            className='image'
            height={20}
            width={20}
            src={location}
            alt='location'
          />
        </S.Info>
        <S.P__Info>Hồ Chí Minh</S.P__Info>
      </S.WrapperInfo>
      <BtnDetail />
    </S.WrapperCard>
  );
};
