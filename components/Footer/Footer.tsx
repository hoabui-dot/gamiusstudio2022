import React from 'react';
import * as S from './Footer.styled';
import Image from 'next/image';

interface FooterProps {}

export const MDFooter = {
  mainInfo: {
    companyName: 'CÔNG TY TNHH Studio',
    location: '523 Tô Hiến Thành, P.14, Q.10, TP. HCM',
    phone: '1900-1234',
    openingHours: '8:30 - 20:30 (T2 đến T7)',
  },
  aboutUs: [
    {
      label: 'Introduce',
      url: '/',
    },
    {
      label: 'Contact us',
      url: '/',
    },
  ],
  works: [
    {
      label: 'Design 2D',
      url: '/',
    },
    {
      label: '3d Modeling',
      url: '/',
    },
    {
      label: 'Videos/VFX',
      url: '/',
    },
  ],
};

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
