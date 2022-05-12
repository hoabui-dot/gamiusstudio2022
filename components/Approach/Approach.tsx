import React from 'react';
import {SectionTitle} from '../SectionTitle/SectionTitle';
import {ApproachItem} from './ApproachItem';
import * as A from './Approach.styled';
import {KeyMessage} from '../KeyMessage/KeyMessage';

export interface ApproachProps {}

export const ApproachData = [
  {
    title: 'Through line',
    subTitle:
      'All ideas have a narratives to tell. It is core to build depth, dimension and distinctiveness.',
  },
  {
    title: 'Strong connection',
    subTitle:
      'We combine the art and long-term goal to create a seamless blend of capabilities to solve challenges.',
  },
  {
    title: 'Holistic perpective',
    subTitle:
      'Various thoughts from culture to individual values are always taken into consideration to inspire emotion and innovation.',
  },
  {
    title: 'Simple but significant',
    subTitle:
      'All elements are carefully chosen to fully deliver meaningful message in a visually comfortable way.',
  },
  {
    title: 'Impactful performance',
    subTitle:
      'We transform shining piece of creativity into effectively communication which encourages customer’s action.',
  },
  {
    title: 'High versatility',
    subTitle:
      'We have a wide variety of skills and extensive knowledge to be flexible and adaptable.',
  },
];

export const Approach = (props: ApproachProps) => {
  return (
    <A.ApproachWrap>
      <SectionTitle title='The approach' />
      <KeyMessage type2={false} />

      <A.Grid>
        {ApproachData.map((data, index) => (
          <ApproachItem
            key={index}
            title={data.title}
            subTitle={data.subTitle}
          />
        ))}
      </A.Grid>
    </A.ApproachWrap>
  );
};
