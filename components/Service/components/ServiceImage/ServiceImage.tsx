import * as S from './ServiceImage.styled';
import Image from 'next/image';

interface ServiceImageProps {
  data: {
    imgSrc: string;
    imgAlt: string;
  };
  active: boolean;
}

export const ServiceImage = (props: ServiceImageProps) => {
  const {
    data: { imgSrc, imgAlt },
    active,
  } = props;

  return (
    <S.ServiceImage className={active ? 'active' : ''}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        layout='fill'
        objectFit='contain'
      ></Image>
    </S.ServiceImage>
  );
};
