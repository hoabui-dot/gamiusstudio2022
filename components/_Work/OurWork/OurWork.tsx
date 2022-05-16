import React from 'react';
import * as S from './OurWork.styled';
import * as G from '../../../styles/global.styled';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { ProjectList } from './components/ProjectList/ProjectList';

export interface OurWorkProps {}

export const OurWork = ({}: OurWorkProps) => {
  return (
    <S.OurWork>
      <G.Container>
        <SectionTitle title={'Our Work'} descriptionColor={true} />
        <ProjectList />
      </G.Container>
    </S.OurWork>
  );
};
