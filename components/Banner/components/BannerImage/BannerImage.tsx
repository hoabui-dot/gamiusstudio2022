import * as S from './BannerImage.styled';
import Image from 'next/image';

interface BannerImageProps {
  data: {
    image: string;
    subImage: string;
  };
  width?: number;
  height?: number;
  active: boolean;
}

export const BannerImage = (props: BannerImageProps) => {
  const {
    data: { image, subImage },
    width,
    height,
    active,
  } = props;

  return (
    <S.BannerImage className={active ? 'active' : ''}>
      <Image
        src={image}
        alt={subImage}
        layout='fill'
        objectFit='contain'
      ></Image>
    </S.BannerImage>
  );
};
