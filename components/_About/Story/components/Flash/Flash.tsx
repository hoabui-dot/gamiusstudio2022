import React from 'react';
import * as S from './Flash.styled';
import Image from 'next/image';
import flash from '../../../../../public/img/bigFlash.png';

export const FlashBackgroundStory = () => {
  return (
    <>
      <S.WrapperImageUpLeft>
        <Image width={135} height={180} src={flash} alt='flash' />
      </S.WrapperImageUpLeft>
      <S.WrapperImageBottomRight>
        <Image width={135} height={180} src={flash} alt='flash' />
      </S.WrapperImageBottomRight>
    </>
  );
};
