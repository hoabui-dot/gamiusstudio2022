import React from 'react';
import * as S from './SectionTitle.styled';

export interface SectionTitleProps {
  title: string;
  subTitle?: string;
  descriptionColor?: boolean;
}

export const SectionTitle = ({
  title,
  subTitle,
  descriptionColor,
}: SectionTitleProps) => {
  return (
    <S.titleSection>
      <S.Title textColor={descriptionColor ? true : false}>{title}</S.Title>
      <S.Description textColor={descriptionColor ? true : false}>
        {subTitle}
      </S.Description>
    </S.titleSection>
  );
};
