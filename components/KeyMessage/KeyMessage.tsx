import React from "react";
import * as S from "./KeyMessage.styled";
import Image from "next/image";
import decor from "../../public/img/Decor.png";

export interface KeyMessageProps {
  fontSize?: string;
}

export const KeyMessage = (props: KeyMessageProps) => {
  return (
    <div>
      <S.BackgroundSquare>
        <S.FooterContainer>
          <S.WrapperKeyMessage>
            <S.WrapperImage>
              <Image src={decor} alt={"decor comma"} />
            </S.WrapperImage>
            <S.Text>
              Specialising in diversity, we convey meaningful vision through
              variety of creative and impacful visual solution and support you
              in your projects.
            </S.Text>
          </S.WrapperKeyMessage>
        </S.FooterContainer>
      </S.BackgroundSquare>
    </div>
  );
};
