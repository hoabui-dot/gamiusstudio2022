import React from 'react';
import * as S from './Carrers.styled';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { Cards } from './Components/Card/Cards';
import { BtnDetail } from './Components/BtnDetail/BtnDetail';

export const Carrers = () => {
  return (
    <>
      <SectionTitle
        title='Carrers'
        subTitle='No matter how quirky you are, our multi-talented team needs you!'
      />
      <S.Container>
        <Cards />
      </S.Container>
      <S.Center>
        <BtnDetail version2={true} />
      </S.Center>
    </>
  );
};
