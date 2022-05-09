import React from 'react';
import * as S from './NavItem.styled';
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  tab: {
    title: string;
    url: string;
    class?: string;
  };
}

export const NavItem = (props: NavItemProps) => {
  const { tab } = props;
  return tab.class === 'contact' ? (
    <S.NavItem>
      <Link href={tab.url}>
        <S.NavContact>
          CONTACT NOW
          <S.FlashIcon>
            <Image
              src='/img/flash.png'
              alt='Gaming Logo'
              width='1'
              height='1'
              layout='responsive'
            />
          </S.FlashIcon>
        </S.NavContact>
      </Link>
    </S.NavItem>
  ) : (
    <S.NavItem className='group'>
      <Link href={tab.url}>
        <S.NavUrl>{tab.title}</S.NavUrl>
      </Link>
    </S.NavItem>
  );
};
