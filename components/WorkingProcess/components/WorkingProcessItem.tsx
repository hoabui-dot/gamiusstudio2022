import React from 'react';
import Image from 'next/image';
import * as S from './WorkingProcessItem.styled';

type WorkingProcessData = {
  image: string;
  subImage: string;
  title: string;
  subTitle: string;
};

export const WorkingProcessItem = ({
  image,
  subImage,
  title,
  subTitle,
}: WorkingProcessData) => {
  return (
    <S.Item>
      <S.Image>
        <Image
          src={image}
          layout='responsive'
          width={1}
          height={1}
          alt={subImage}
        />
      </S.Image>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.Content>
    </S.Item>
  );
};
