import React, { useState } from 'react';
import Image from 'next/image';
import * as O from './OurCustomer.styled';

export interface ItemData {
  data: { image: string };
  index: number;
}

export const Item = (props: ItemData) => {
  const [color, setColor] = useState(false);
  const [hidden, setHidden] = useState(false);
  const handleMouse = () => {
    setColor(true);
    setHidden(true);
  };

  const {
    data: { image },
    index,
  } = props;

  return (
    <O.Item
      className={`${index === 0 && hidden === true ? 'setHidden' : ''} ${
        color ? 'active' : ''
      }`}
    >
      <Image
        onMouseEnter={handleMouse}
        src={image}
        layout='fill'
        objectFit='contain'
        alt='ClientSays'
      />
    </O.Item>
  );
};
