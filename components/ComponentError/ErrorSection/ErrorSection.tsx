import * as S from './ErrorSection.styled';
import * as G from '../../../styles/global.styled';
import Image from 'next/image';

export const ErrorSection = () => {
  return (
    <S.ErrorSection>
      <G.Container>
        <S.ErrorSectionInner>
          <S.ErrorImage>
            <Image
              src='/img/errorText.png'
              alt='Error'
              layout='fill'
              objectFit='contain'
            />
          </S.ErrorImage>
          <S.ErrorText>Sorry, page not found.</S.ErrorText>
        </S.ErrorSectionInner>
      </G.Container>
    </S.ErrorSection>
  );
};
