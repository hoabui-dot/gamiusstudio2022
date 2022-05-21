import React from 'react';
import * as S from './ApproachItem.styled';

export interface ApproachItemProps {
  title?: string;
  subTitle?: string;
}

export const ApproachItem = (props: ApproachItemProps) => {
  return (
    <S.Item>
      <S.ItemTitle>{props.title}</S.ItemTitle>
      <S.ItemSubTitle>{props.subTitle}</S.ItemSubTitle>
    </S.Item>
  );
};
