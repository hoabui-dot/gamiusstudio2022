import React from 'react';
import * as S from './Carrers.styled';
import * as G from '../../../styles/global.styled';
import Image from 'next/image';
import {SectionTitle} from '../../SectionTitle/SectionTitle';
import {Cards} from './Components/Card/Cards';
import {BtnDetail} from './Components/BtnDetail/BtnDetail';
import background from '../../../public/img/bg-carrer.png';

export const Careers = () => {
  return (
    <S.Carrers>
      <S.Background>
        <S.WrapperImage>
          <Image
            className='image'
            src={background}
            layout='fill'
            objectFit='cover'
            objectPosition='top'
            alt='Banner Slide'
          />
        </S.WrapperImage>
      </S.Background>
      <S.ContentCarrer>
        <SectionTitle
          title='Careers'
          subTitle='No matter how quirky you are, our multi-talented team needs you!'
          descriptionColor={true}
        />
        <G.Container>
          <S.CenterDiv>
            <Cards />
          </S.CenterDiv>
        </G.Container>
        <S.Center>
          <BtnDetail version2={true} />
        </S.Center>
      </S.ContentCarrer>
    </S.Carrers>
  );
};
