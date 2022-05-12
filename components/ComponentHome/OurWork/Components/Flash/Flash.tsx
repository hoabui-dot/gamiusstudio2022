import React from 'react';
import * as S from './Flash.styled';
import Image from 'next/image';
import flash from '../../../../../public/img/bigFlash.png';

export interface IFlash {}

export const FlashBackground = (props: IFlash) => {
  return (
    <>
      <S.WrapperImageUpLeft>
        <Image width={135} height={180} src={flash} alt='flash' />
      </S.WrapperImageUpLeft>
      <S.WrapperImageBottomLeft>
        <Image width={135} height={180} src={flash} alt='flash' />
      </S.WrapperImageBottomLeft>
      <S.WrapperImageMiddleRight>
        <Image width={135} height={180} src={flash} alt='flash' />
      </S.WrapperImageMiddleRight>
    </>
  );
};
