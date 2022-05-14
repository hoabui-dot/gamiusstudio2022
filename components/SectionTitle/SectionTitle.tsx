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
      {descriptionColor ? (
        <S.Title2>{title}</S.Title2>
      ) : (
        <S.Title>{title}</S.Title>
      )}
      {descriptionColor ? (
        <S.DescriptionColor>{subTitle}</S.DescriptionColor>
      ) : (
        <S.Description>{subTitle}</S.Description>
      )}
    </S.titleSection>
  );
};
