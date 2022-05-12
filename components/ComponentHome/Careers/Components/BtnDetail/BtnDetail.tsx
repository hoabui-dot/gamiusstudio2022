import React from 'react';
import * as S from './BtnDetail.styled';

export interface IBtnDetail {
  version2?: boolean;
}

export const BtnDetail = (props: IBtnDetail) => {
  const version2 = props.version2;
  return (
    <>
      {version2 ? (
        <S.BtnDetailRevert>
          See all &nbsp;
          <i className='fa-solid fa-angle-right' />
        </S.BtnDetailRevert>
      ) : (
        <S.BtnDetail>
          Detail &nbsp;
          <i className='fa-solid fa-angle-right' />
        </S.BtnDetail>
      )}
    </>
  );
};
