import React from 'react';
import * as S from './Footer.styled';
import Image from 'next/image';

export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <S.Footer>
      <S.FooterAbove>
        <S.FooterContainer>
          <S.FooterAboveInner>
            <S.FooterLogo>
              <Image
                src='/img/FooterLogo.png'
                alt='Gaming Logo'
                width='93'
                height='32'
                layout='responsive'
              />
            </S.FooterLogo>
          </S.FooterAboveInner>
        </S.FooterContainer>
      </S.FooterAbove>
      <S.FooterBelow>Copyright © Studio. All rights reserved</S.FooterBelow>
    </S.Footer>
  );
};
