import React from "react";
import * as S from "./Header.styled";

export interface HeaderProps {
  color?: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div>
      <S.FooterContainer>
        <S.FooterText>toan</S.FooterText>
      </S.FooterContainer>
    </div>
  );
};
