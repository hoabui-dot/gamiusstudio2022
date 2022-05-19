import React from 'react';
import * as S from './KeyMessage.styled';
import * as G from '../../styles/global.styled';
import Image from 'next/image';
import decor from '../../public/img/Decor.png';

export interface KeyMessageProps {
  type?: boolean;
  story?: boolean;
}

export const KeyMessage = ({type, story}: KeyMessageProps) => {
  return (
    <S.KeyMessage>
      <G.Container>
        <S.WrapperKeyMessage>
          <S.WrapperImage>
            <Image src={decor} alt={'decor'} />
          </S.WrapperImage>
          {!story && (
            <>
              {type ? (
                <S.Text type={true}>
                  <span>Specializing </span>
                  in diversity, we <span> convey meaningful</span> vision
                  through
                  <span> variety of creative </span> and{' '}
                  <span> impactful </span>
                  visual solution and <span>support</span> you in your projects.
                </S.Text>
              ) : (
                <S.Text type={false}>
                  We are driven by the purpose of{' '}
                  <span>connecting reality </span>
                  to your <span>value </span>
                  and conquering <span> customer’s hearts</span>
                </S.Text>
              )}
            </>
          )}
          {story && (
            <S.Text type={false} story={true}>
              <span>Gamius </span>
              is <span>developed </span>with a dimension to
              <span> create work </span>which is as <span>effective </span>as it
              is beautiful. We specialize in <span>design </span>and
              <span> illustraton </span>with a focus on{' '}
              <span>innovative concepts</span>. We apply a<span> customer</span>{' '}
              and user centered methodology to gain insights but have great
              holistic perspective to <span>spark creativity</span>. It is our
              way to turn <span>ideas into reality</span>.
            </S.Text>
          )}
        </S.WrapperKeyMessage>
      </G.Container>
    </S.KeyMessage>
  );
};
