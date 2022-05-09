import React from 'react';
import * as S from './Footer.styled';
import Image from 'next/image';

import { MDFooter } from '../../utils/dataConfig';

export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  const {
    mainInfo: { companyName, location, phone, openingHours },
    aboutUs,
    works,
  } = MDFooter;
  return (
    <S.Footer>
      <S.FooterAbove>
        <S.FooterContainer>
          <S.FooterAboveInner>
            <S.MainInfo>
              <S.FooterLogo>
                <Image
                  src='/img/FooterLogo.png'
                  alt='Gaming Logo'
                  width='93'
                  height='32'
                  layout='responsive'
                />
              </S.FooterLogo>
              <S.FooterItem>
                <span className='bold'>{companyName}</span>
              </S.FooterItem>
              <S.FooterItem>
                <span className='bold'>VPĐD: </span>
                {location}
              </S.FooterItem>
              <S.FooterItem>
                <span className='bold'>Hotline: </span>
                {phone} | {openingHours}
              </S.FooterItem>
            </S.MainInfo>
          </S.FooterAboveInner>
        </S.FooterContainer>
      </S.FooterAbove>
      <S.FooterBelow>Copyright © Studio. All rights reserved</S.FooterBelow>
    </S.Footer>
  );
};
