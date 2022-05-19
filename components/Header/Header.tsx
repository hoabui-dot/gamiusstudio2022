import * as S from './Header.styled';
import * as G from '../../styles/global.styled';
import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from './components/NavItem/NavItem';
import { useState } from 'react';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import { MDHeader } from '../../utils/dataConfig';

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { navigation } = MDHeader;

  return (
    <S.Header>
      <G.Container>
        <S.HeaderInner>
          <S.LeftContentWrap>
            <S.IconWrap
              onClick={() => setMobileNav(!mobileNav)}
              relocate={mobileNav}
            >
              <MenuIcon change={mobileNav} />
            </S.IconWrap>
            <Link href='/'>
              <S.HeaderLogo>
                <Image
                  src='/img/LogoStudio.png'
                  alt='Gaming Logo'
                  layout='fill'
                  objectFit='contain'
                />
              </S.HeaderLogo>
            </Link>
          </S.LeftContentWrap>
          <S.HeaderNav show={mobileNav}>
            {navigation.map((item, index) => (
              <NavItem tab={item} key={index} />
            ))}
          </S.HeaderNav>
          <S.ContactButton>CONTACT NOW</S.ContactButton>
        </S.HeaderInner>
      </G.Container>
    </S.Header>
  );
};
