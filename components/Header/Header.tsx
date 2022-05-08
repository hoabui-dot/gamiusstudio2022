import React from "react";
import * as S from "./Header.styled";

interface HeaderProps {
  color?: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div>
      <S.FooterContainer>
        <S.FooterText>This is header</S.FooterText>
        <S.FooterButton> Click </S.FooterButton>

        <p>
          toan <span></span>
        </p>
      </S.FooterContainer>
    </div>
  );
};
