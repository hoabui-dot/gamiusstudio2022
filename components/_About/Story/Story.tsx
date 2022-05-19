import React from 'react';
import * as S from './Story.styled';
import * as G from '../../../styles/global.styled';
import { KeyMessage } from '../../KeyMessage/KeyMessage';
import { FlashBackgroundStory } from './components/Flash/Flash';
import { SectionTitle } from '../../SectionTitle/SectionTitle';

export const Story = () => {
  return (
    <S.Story className='background-net'>
      <S.StoryInner>
        <G.Container>
          <FlashBackgroundStory />
          <SectionTitle title='Our Story' />
          <KeyMessage story={true} />
        </G.Container>
      </S.StoryInner>
    </S.Story>
  );
};
