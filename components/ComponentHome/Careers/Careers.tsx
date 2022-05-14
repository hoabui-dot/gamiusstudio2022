import React from 'react';
import * as S from './Careers.styled';
import * as G from '../../../styles/global.styled';
import Image from 'next/image';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { Cards } from './Components/Card/Cards';
import { BtnDetail } from './Components/BtnDetail/BtnDetail';
import background from '../../../public/img/bg-career.png';

export const Careers = () => {
  return (
    <S.Careers>
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
      <G.Container>
        <S.ContentCareer>
          <SectionTitle
            title='Careers'
            subTitle='No matter how quirky you are, our multi-talented team needs you!'
            descriptionColor={true}
          />
          <S.CenterDiv>
            <Cards />
          </S.CenterDiv>
          <S.Center>
            <BtnDetail version2={true} />
          </S.Center>
        </S.ContentCareer>
      </G.Container>
    </S.Careers>
  );
};
