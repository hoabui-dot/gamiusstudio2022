import React from 'react';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ApproachItem } from './components/ApproachItem';
import * as S from './Approach.styled';
import * as G from '../../styles/global.styled';
import { KeyMessage } from '../KeyMessage/KeyMessage';
import { ApproachData } from '../../utils/dataConfig';

export const Approach = () => {
  return (
    <S.Background>
      <G.Container>
        <SectionTitle title='The approach' />
        <KeyMessage type={false} />
        <S.Grid>
          {ApproachData.map((data, index) => (
            <ApproachItem
              key={index}
              title={data.title}
              subTitle={data.subTitle}
            />
          ))}
        </S.Grid>
      </G.Container>
    </S.Background>
  );
};
