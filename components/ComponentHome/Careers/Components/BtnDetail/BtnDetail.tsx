import React from 'react';
import * as S from './BtnDetail.styled';

export interface IBtnDetail {
  version?: boolean;
}

export const BtnDetail = ({ version }: IBtnDetail) => {
  return (
    <S.BtnDetail>
      {version ? 'See all' : 'Detail'} &nbsp;
      <i className='fa-solid fa-angle-right' />
    </S.BtnDetail>
  );
};
