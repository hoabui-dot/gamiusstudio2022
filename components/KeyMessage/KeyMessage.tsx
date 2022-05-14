import React from 'react';
import * as S from './KeyMessage.styled';
import * as G from '../../styles/global.styled';
import Image from 'next/image';
import decor from '../../public/img/Decor.png';

export interface KeyMessageProps {
  type2?: boolean;
}

export const KeyMessage = ({type2}: KeyMessageProps) => {
  return (
    <G.Container className='section'>
      <S.WrapperKeyMessage>
        <S.WrapperImage>
          <Image src={decor} alt={'decor'} />
        </S.WrapperImage>
        {type2 ? (
          <S.Text type2={true}>
            <span>Specializing </span>
            in diversity, we <span> convey meaningful</span> vision through
            <span> variety of creative </span> and <span> impacful </span>
            visual solution and <span>support</span> you in your projects.
          </S.Text>
        ) : (
          <S.Text type2={false}>
            We are driven by the purpose of <span>connecting reality </span>
            to your <span>value </span>
            and conquering <span> customer’s hearts</span>
          </S.Text>
        )}
      </S.WrapperKeyMessage>
    </G.Container>
  );
};
