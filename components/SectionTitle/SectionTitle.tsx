import React from "react";
// import * as S from "./Header.styled";
import * as S from "./SectionTitle.styled"

export interface SectionTitleProps {
  title?: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <S.titleSection>
        <S.Title>Our Services</S.Title>
        <S.description>You can find your own solution with our expertise</S.description>
      {/* <S.FooterContainer>
        <S.FooterText>This is header</S.FooterText>
        <S.FooterButton> Click </S.FooterButton>

        <p>
          toan <span></span>
        </p>
      </S.FooterContainer> */}
    </S.titleSection>
  );
};
