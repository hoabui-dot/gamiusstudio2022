import * as S from './Header.styled';
import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from './components/NavItem/NavItem';
import { useState } from 'react';
import { MenuIcon } from '../MenuIcon/MenuIcon';

interface HeaderProps {}

const MDHeader = {
  navigation: [
    { title: 'Home', url: '/' },
    { title: 'Works', url: '/' },
    { title: 'About Us', url: '/' },
    { title: 'Contact', url: '/contact', class: 'contact' },
  ],
};

export const Header = (props: HeaderProps) => {
  const [mobileNav, setMobileNav] = useState(true);
  const { navigation } = MDHeader;

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderInner>
          <S.LeftContentWrap>
            <S.IconWrap onClick={() => setMobileNav(!mobileNav)}>
              <MenuIcon change={mobileNav} />
            </S.IconWrap>
            <Link href='/'>
              <S.HeaderLogo>
                <Image
                  src='/img/LogoStudio.png'
                  alt='Gaming Logo'
                  width='93'
                  height='32'
                  layout='responsive'
                />
              </S.HeaderLogo>
            </Link>
          </S.LeftContentWrap>
          <S.HeaderNav className={mobileNav ? 'show' : 'hide'}>
            {navigation.map((item, index) => (
              <NavItem tab={item} key={index} />
            ))}
          </S.HeaderNav>
          <S.ContactButton>CONTACT NOW</S.ContactButton>
        </S.HeaderInner>
      </S.HeaderContainer>
    </S.Header>
  );
};
