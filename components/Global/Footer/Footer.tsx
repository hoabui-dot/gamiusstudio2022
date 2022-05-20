import React from 'react';
import * as S from './Footer.styled';
import * as G from '../../../styles/global.styled';
import Image from 'next/image';
import { FooterList } from './components/FooterList/FooterList';
import { MDFooter } from '../../../utils/dataConfig';
import Link from 'next/link';

export const Footer = () => {
  const {
    mainInfo: { companyName, location, phone, openingHours },
    listContents,
  } = MDFooter;

  return (
    <S.Footer>
      <S.FooterAbove>
        <G.Container>
          <S.FooterAboveInner>
            <S.MainInfo>
              <Link href='/'>
                <S.FooterLogo>
                  <Image
                    src='/img/FooterLogo.png'
                    alt='Gaming Logo'
                    layout='fill'
                    objectFit='contain'
                  />
                </S.FooterLogo>
              </Link>
              <S.FooterItem>
                <span className='bold'>{companyName}</span>
              </S.FooterItem>
              <S.FooterItem>
                <span className='bold'>VPĐD: </span>
                {location}
              </S.FooterItem>
              <S.FooterItem>
                <span className='bold'>Hotline: </span>
                <Link href={`tel:${phone}`}>
                  <a>{phone}</a>
                </Link>{' '}
                | {openingHours}
              </S.FooterItem>
            </S.MainInfo>
            <S.DetailUrl>
              {listContents.map((item, index) => (
                <FooterList key={index} data={item} />
              ))}
            </S.DetailUrl>
          </S.FooterAboveInner>
        </G.Container>
      </S.FooterAbove>
      <S.FooterBelow>Copyright © Studio. All rights reserved</S.FooterBelow>
    </S.Footer>
  );
};
