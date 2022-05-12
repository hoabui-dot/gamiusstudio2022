import Image from 'next/image';
import { useState } from 'react';
import { ServiceImage } from './components/ServiceImage/ServiceImage';
import { ServiceItem } from './components/ServiceItem/ServiceItem';
import * as S from './Service.styled';

const MDService = {
  title: 'Our Service',
  subTitle: 'You can find your own solution with our expertise',
  mainContent: [
    {
      imgSrc: '/img/Shooting1.png',
      imgAlt: 'gaming',
      title: 'Illustration',
      description:
        'Digital painting and illustrations for posters, advertising campaigns, magazines, book covers,...',
    },
    {
      imgSrc: '/img/Shooting2.png',
      imgAlt: 'gaming',
      title: 'Shooting',
      description:
        'Concept definition, art direction, photo processing for artistic, commercial or corporate photo.',
    },
    {
      imgSrc: '/img/3DModelling.png',
      imgAlt: 'gaming',
      title: '3D Modelling',
      description:
        '3D characters, eviroments, creature for games, movies and 3D printing technologies.',
    },
    {
      imgSrc: '/img/Animation.png',
      imgAlt: 'gaming',
      title: 'Animation - VFX',
      description:
        'Animation and visual effects for feature films and television.',
    },
  ],
};

interface ServiceProps {}

export const Service = (props: ServiceProps) => {
  const { title, subTitle, mainContent } = MDService;
  const [serviceState, setServiceState] = useState(0);

  const onMouseEnter = (index: any) => {
    setServiceState(index);
  };

  return (
    <S.Service>
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
      <S.ServiceContainer>
        <S.ServiceInner>
          <S.SectionTitle>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subTitle}</S.SubTitle>
          </S.SectionTitle>
          <S.ServiceContent>
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
          </S.ServiceContent>
        </S.ServiceInner>
      </S.ServiceContainer>
    </S.Service>
  );
};
