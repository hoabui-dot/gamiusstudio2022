import React from 'react';
import * as S from './KeyMessage.styled';
import * as G from '../../styles/global.styled';
import Image from 'next/image';
import decor from '../../public/img/Decor.png';

export interface KeyMessageProps {
  type?: boolean;
}

export const KeyMessage = ({ type }: KeyMessageProps) => {
  return (
    <S.KeyMessage>
      <G.Container>
        <S.WrapperKeyMessage>
          <S.WrapperImage>
            <Image src={decor} alt={'decor'} />
          </S.WrapperImage>
          {type ? (
            <S.Text type={true}>
              <span>Specializing </span>
              in diversity, we <span> convey meaningful</span> vision through
              <span> variety of creative </span> and <span> impactful </span>
              visual solution and <span>support</span> you in your projects.
            </S.Text>
          ) : (
            <S.Text type={false}>
              We are driven by the purpose of <span>connecting reality </span>
              to your <span>value </span>
              and conquering <span> customer’s hearts</span>
            </S.Text>
          )}
        </S.WrapperKeyMessage>
      </G.Container>
    </S.KeyMessage>
  );
};
