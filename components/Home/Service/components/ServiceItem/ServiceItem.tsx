import Image from 'next/image';
import Link from 'next/link';
import * as S from './ServiceItem.styled';

interface ServiceItemProps {
  data: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    url: string;
  };
  index: number;
  onMouseEnter: Function;
  active: boolean;
}

export const ServiceItem = (props: ServiceItemProps) => {
  const {
    data: { title, description, url },
    onMouseEnter,
    index,
    active,
  } = props;
  return (
    <Link href={url}>
      <S.ServiceItem
        onMouseEnter={() => onMouseEnter(index)}
        className={active ? 'active' : ''}
      >
        <S.FlashWrap className='flashWrap'>
          <Image
            src='/img/threeFlash.png'
            alt='Gaming Icon'
            layout='fill'
            objectFit='contain'
          ></Image>
        </S.FlashWrap>
        <S.FlashFillWrap className='flashFillWrap'>
          <Image
            src='/img/threeFlashFill.png'
            alt='Gaming Icon'
            layout='fill'
            objectFit='contain'
          ></Image>
        </S.FlashFillWrap>
        <S.TextWrap className='textWrap'>
          <S.Title className='title'>{title}</S.Title>
          <S.Description className='description'>{description}</S.Description>
        </S.TextWrap>
      </S.ServiceItem>
    </Link>
  );
};
