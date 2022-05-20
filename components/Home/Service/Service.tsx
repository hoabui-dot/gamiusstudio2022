import Image from 'next/image';
import { useState } from 'react';
import { MDService } from '../../../utils/dataConfig';
import { ServiceImage } from './components/ServiceImage/ServiceImage';
import { ServiceItem } from './components/ServiceItem/ServiceItem';
import * as S from './Service.styled';
import * as G from '../../../styles/global.styled';

export const Service = () => {
  const { title, subTitle, mainContent } = MDService;
  const [serviceState, setServiceState] = useState(0);

  const onMouseEnter = (index: any) => {
    setServiceState(index);
  };

  return (
    <S.Service className='background-net'>
      <S.FlashTheme className='first'>
        <Image
          src='/img/bigFlash.png'
          alt='Gaming Icon'
          layout='fill'
          objectFit='contain'
        ></Image>
      </S.FlashTheme>
      <S.FlashTheme className='second'>
        <Image
          src='/img/bigFlash.png'
          alt='Gaming Icon'
          layout='fill'
          objectFit='contain'
        ></Image>
      </S.FlashTheme>
      <S.FlashTheme className='third'>
        <Image
          src='/img/bigFlash.png'
          alt='Gaming Icon'
          layout='fill'
          objectFit='contain'
        ></Image>
      </S.FlashTheme>
      <G.Container>
        <S.SectionTitle>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
        </S.SectionTitle>
        <S.ServiceInner>
          <S.ServiceImageWrap>
            {mainContent.map((item, index) => (
              <ServiceImage
                key={index}
                data={item}
                active={serviceState === index}
              />
            ))}
          </S.ServiceImageWrap>
          <S.ServiceList>
            {mainContent.map((item, index) => (
              <ServiceItem
                key={index}
                data={item}
                index={index}
                active={serviceState === index}
                onMouseEnter={onMouseEnter}
              />
            ))}
          </S.ServiceList>
        </S.ServiceInner>
      </G.Container>
    </S.Service>
  );
};
