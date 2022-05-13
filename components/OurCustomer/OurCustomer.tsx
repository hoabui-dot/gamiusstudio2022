import React, {useState} from 'react';
import * as S from './OurCustomer.styled';
import Image from 'next/image';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import ChangeImg from '../../public/img/OurCustomerChange.png';
import { OurCustomerData } from '../../utils/dataConfig';

export const OurCustomer = () => {
  const [state, setState] = useState(false)

  return (
    <S.OurCustomer>
      <SectionTitle title='Our customers' />
      <S.Slides>
        {OurCustomerData.map((data, index) => (
          <S.Slide key={index} onMouseOver={() => {index===0 ? setState(true) : setState(false)}} onMouseOut={() => setState(false)}> 
          
            {index === 0 && (
              <S.ChangeImg>
                <Image
                  src={ChangeImg}
                  layout='fill'
                  objectFit='contain'
                  alt='ClientSays'
                />
              </S.ChangeImg>
            )}
            <Image className={index === 0 && state ? "invisible" : ""}
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
