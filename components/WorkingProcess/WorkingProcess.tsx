import React from 'react';
import * as S from './WorkingProcess.styled';
import * as G from '../../styles/global.styled';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { WorkingProcessItem } from './components/WorkingProcessItem';
import { WorkingProcessData } from "../../utils/dataConfig"


export const WorkingProcess = () => {
  return (
    <S.Wrap>
      <G.Container>
        <SectionTitle
          title='Working process'
          subTitle='Successful process for successful project'
        />
        <S.WorkingProcess>
          {WorkingProcessData && !!WorkingProcessData.length && WorkingProcessData.map((data, index) => (
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
