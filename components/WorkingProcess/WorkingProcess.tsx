import React from 'react';
import * as S from './WorkingProcess.styled';
import * as G from '../../styles/global.styled';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { WorkingProcessItem } from './components/WorkingProcessItem';

const WorkingProcessData = [
  {
    image: '/img/WorkingProcess1.png',
    subImage: 'Working Process',
    title: 'Diagnose deeply ',
    subTitle:
      'From your desires, we tease out questions, analyse all challenges and insights to find power.',
  },
  {
    image: '/img/WorkingProcess2.png',
    subImage: 'Working Process',
    title: 'Build the meaning',
    subTitle:
      'All designs deliver deeply meaningful messages as its own value to communicate more effectively.',
  },
  {
    image: '/img/WorkingProcess3.png',
    subImage: 'Working Process',
    title: ' Drive memory',
    subTitle:
      "Creative designs with iconic identity, sensorial expression attract attention and win customer's headed",
  },
  {
    image: '/img/WorkingProcess4.png',
    subImage: 'Working Process',
    title: 'Fine-tune and complete',
    subTitle:
      'A finished product always requires a meticulousness in every small detail.',
  },
  {
    image: '/img/WorkingProcess5.png',
    subImage: 'Working Process',
    title: 'Aftercare',
    subTitle:
      'We provides support throughout and after each project for your greatest satisfaction and experience.',
  },
];

export const WorkingProcess = () => {
  return (
    <S.Wrap>
      <G.Container>
        <SectionTitle
          title='Working process'
          subTitle='Successful process for successful project'
        />
        <S.WorkingProcess>
          {WorkingProcessData.map((data, index) => (
            <WorkingProcessItem
              key={index}
              image={data.image}
              subImage={data.subImage}
              title={data.title}
              subTitle={data.subTitle}
            />
          ))}
        </S.WorkingProcess>
      </G.Container>
    </S.Wrap>
  );
};
