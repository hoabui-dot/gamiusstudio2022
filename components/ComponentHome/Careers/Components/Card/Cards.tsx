import React from 'react';
import * as S from './Cards.styled';
import Image from 'next/image';
import { BtnDetail } from '../BtnDetail/BtnDetail';
import { CardsData } from '../../../../../utils/dataConfig';

export const Cards = () => {
  return (
    <>
      {CardsData.map((_data, index) => (
        <S.WrapperCard key={index}>
          <S.SubTitle>{_data.subTitle}</S.SubTitle>
          <S.Title>{_data.title}</S.Title>
          <S.WrapperInfo>
            {_data.content.map((_data2, index2) => (
              <S.Info key={index2}>
                <Image
                  className='image'
                  height={20}
                  width={20}
                  src={_data2.src}
                  alt={_data2.alt}
                />
                <S.P__Info>{_data2.content}</S.P__Info>
              </S.Info>
            ))}
          </S.WrapperInfo>
          <BtnDetail />
        </S.WrapperCard>
      ))}
    </>
  );
};
