import React from 'react';
import Link from 'next/link';
import * as S from './BtnDetail.styled';

export interface IBtnDetail {
  version?: boolean;
  href: string;
}

export const BtnDetail = ({ version, href }: IBtnDetail) => {
  return (
    <Link href={href}>
      <S.BtnDetail>
        {version ? 'See all' : 'Detail'} &nbsp;
        <i className='fa-solid fa-angle-right' />
      </S.BtnDetail>
    </Link>
  );
};
