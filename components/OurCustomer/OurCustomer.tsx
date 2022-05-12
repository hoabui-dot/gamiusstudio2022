import React from 'react';
import * as S from './OurCustomer.styled';
import Image from 'next/image';
import {SectionTitle} from '../SectionTitle/SectionTitle';
import {OurCustomerData} from '../../utils/dataConfig';

export const OurCustomer = () => {
  return (
    <S.OurCustomer>
      <SectionTitle title='Our customers' />
      <S.Slides>
        {OurCustomerData.map((data, index) => (
          <S.Slide key={index}>
            <Image
              src={data.image}
              layout='fill'
              objectFit='contain'
              alt='ClientSays'
            />
          </S.Slide>
        ))}
      </S.Slides>
    </S.OurCustomer>
  );
};
