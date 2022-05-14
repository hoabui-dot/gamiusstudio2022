import React from 'react';
import * as S from './BtnDetail.styled';

export interface IBtnDetail {
  version2?: boolean;
}

export const BtnDetail = ({ version2 }: IBtnDetail) => {
  return (
    <S.BtnDetail>
      {version2 ? 'See all' : 'Detail'} &nbsp;
      <i className='fa-solid fa-angle-right' />
    </S.BtnDetail>
  );
};
