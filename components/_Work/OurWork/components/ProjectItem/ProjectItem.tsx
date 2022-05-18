import * as S from './ProjectItem.styled';
import Image, { StaticImageData } from 'next/image';
import { ModalBox } from '../ModalBox/ModalBox';
import { useState } from 'react';

interface ProjectItemProps {
  data: {
    imgSrc: StaticImageData;
    imgAlt: string;
    title: string;
    subTitle: string;
    bigImgSrc: string;
    bigImgAlt: string;
  };
}

export const ProjectItem = ({
  data: { imgSrc, imgAlt, title, subTitle, bigImgSrc, bigImgAlt },
}: ProjectItemProps) => {
  const [active, setActive] = useState(false);
  return (
    <S.ProjectItem>
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
      <ModalBox
        src={bigImgSrc}
        alt={bigImgAlt}
        height={4096}
        width={1059}
        active={active}
        setActive={setActive}
      />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.ProjectItem>
  );
};
