import React from 'react';
import * as S from './ProjectList.styled';
import Image from 'next/image';
import { ProjectListData } from '../../../../../utils/dataConfig';
export interface ProjectListProps {}

export const ProjectList = ({}: ProjectListProps) => {
  return (
    <S.ProjectList>
      {ProjectListData.map((_data, index) => (
        <S.Project key={index}>
          <S.WrapperImage>
            <Image
              className='image'
              //   width={600}
              //   height={700}
              //   layout='fill'
              //   objectFit='contain'
              src={_data.src}
              alt={_data.alt}
            />
            <S.Title>{_data.title}</S.Title>
            <S.SubTitle>{_data.subTitle}</S.SubTitle>
          </S.WrapperImage>
        </S.Project>
      ))}
    </S.ProjectList>
  );
};
