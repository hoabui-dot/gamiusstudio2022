import React from 'react';
import * as S from './OurWork.styled';
import * as G from '../../../styles/global.styled';
import { SectionTitle } from '../../SectionTitle/SectionTitle';

import { ProjectListData } from '../../../utils/dataConfig';
import { ProjectItem } from './components/ProjectItem/ProjectItem';

export interface OurWorkProps {}

export const OurWork = ({}: OurWorkProps) => {
  return (
    <S.OurWork>
      <G.Container>
        <SectionTitle title={'Our Work'} descriptionColor={true} />
        <S.ProjectList>
          {ProjectListData.map((_data, index) => (
            <ProjectItem key={index} data={_data} />
          ))}
        </S.ProjectList>
      </G.Container>
    </S.OurWork>
  );
};
