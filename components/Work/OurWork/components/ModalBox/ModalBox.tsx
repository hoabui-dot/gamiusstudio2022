import * as S from './ModalBox.styled';
import Image, { StaticImageData } from 'next/image';
import { MouseEvent, useEffect } from 'react';

interface ModalBoxProps {
  src: StaticImageData;
  alt: string;
  active: boolean;
  setActive: (value: boolean) => void;
}

export const ModalBox = ({ src, alt, active, setActive }: ModalBoxProps) => {
  const handleActive = (e: MouseEvent) => {
    if ((e.target as Element).id === 'modalBox') setActive(false);
  };

  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  });

  return (
    <S.ModalBox
      className={active ? 'active' : ''}
      id='modalBox'
      onClick={(e) => handleActive(e)}
    >
      <S.ModalContent className='modal-content'>
        <Image src={src} alt={alt} layout='responsive' />
      </S.ModalContent>
    </S.ModalBox>
  );
};
