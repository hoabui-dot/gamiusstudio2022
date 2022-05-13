import React, { useState } from 'react';
import * as S from './OurCustomer.styled';
import Image from 'next/image';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import ChangeImg from '../../public/img/OurCustomerChange.png';
import { Item } from './Item';
// import { OurCustomerData } from '../../utils/dataConfig';

export const OurCustomer = () => {
  const [filter, setFilter] = useState(false);

  const ItemData = [
    { image: '/img/OurCustomer1.png' },
    { image: '/img/OurCustomer2.png' },
    { image: '/img/OurCustomer3.png' },
    { image: '/img/OurCustomer4.png' },
    { image: '/img/OurCustomer5.png' },
    { image: '/img/OurCustomer6.png' },
  ];

  return (
    <S.OurCustomer>
      <SectionTitle title='Our customers' />
      <S.Slides>
        {ItemData.map((data, index) => (
          <S.Slide key={index}>
            {index === 0 && (
              <S.ChangeImg className={filter ? "visible" : ""}>
                <Image onMouseEnter={() => setFilter(true)}
                  src={ChangeImg}
                  layout='fill'
                  objectFit='contain'
                  alt='ClientSays'
                />
              </S.ChangeImg>
            )}
            <Item data={data} index={index}/>
          </S.Slide>
        ))}
      </S.Slides>
    </S.OurCustomer>
  );
};
