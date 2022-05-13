import React from "react";
import * as S from "./SectionTitle.styled"

export interface SectionTitleProps {
  title?: string;
  subTitle?: string;
  descriptionColor?: boolean
}

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <S.titleSection>
        <S.Title>{props.title}</S.Title>
        {props.descriptionColor ? <S.descriptionColor>{props.subTitle}</S.descriptionColor> : <S.description>{props.subTitle}</S.description>}
    </S.titleSection>
  );
};
