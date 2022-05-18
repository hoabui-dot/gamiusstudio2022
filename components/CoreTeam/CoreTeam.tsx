import * as S from './CoreTeam.styled';
import * as G from '../../styles/global.styled';
export const CoreTeam = () => {
  return (
    <S.CoreTeam>
      <G.Container>
        <S.SectionTitle>
          <S.Title>
            Human <span className='whiteTxt'>of</span>
          </S.Title>
          <S.SubTitle>
            Our highly talented and dedicated team are true transformation
            makers.
          </S.SubTitle>
        </S.SectionTitle>
        <S.CoreTeamInner>
          <S.CoreTeamBackground></S.CoreTeamBackground>
          <S.SubTitle>
            Begin with freeing mind, unlock with creativity and fulfill through
            collaboration
          </S.SubTitle>
        </S.CoreTeamInner>
      </G.Container>
    </S.CoreTeam>
  );
};
