import * as S from './ProjectItem.styled';
import Image, { StaticImageData } from 'next/image';
import { ModalBox } from '../ModalBox/ModalBox';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';

interface ProjectItemProps {
  data: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    subTitle: string;
    bigImgSrc: string;
    bigImgAlt: string;
  };
}

const bounceAnimation = keyframes`${bounceInUp}`;

const BounceInUpDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export const ProjectItem = ({
  data: { imgSrc, imgAlt, title, subTitle, bigImgSrc, bigImgAlt },
}: ProjectItemProps) => {
  const [active, setActive] = useState(false);
  return (
    <S.ProjectItem>
      <div className='load-lazy' data-inviewport>
        <BounceInUpDiv className='our-work'>
          <S.WrapperImage>
            <Image
              width={600}
              height={700}
              layout='responsive'
              src={imgSrc}
              alt={imgAlt}
              onClick={() => setActive(true)}
            />
          </S.WrapperImage>
        </BounceInUpDiv>
      </div>
      <ModalBox
        src={bigImgSrc}
        alt={bigImgAlt}
        height={4096}
        width={1059}
        active={active}
        setActive={setActive}
      />
      <S.Title onClick={() => setActive(true)}>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.ProjectItem>
  );
};
