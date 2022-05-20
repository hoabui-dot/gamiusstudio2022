import { useState } from 'react';
import * as S from './Banner.styled';
import * as G from '../../../styles/global.styled';
import { AboutBannerData } from '../../../utils/dataConfig';
import { BannerImage } from './components/BannerImage/BannerImage';
import { StatusIcon } from './components/StatusIcon/StatusIcon';

export const Banner = () => {
  const [state, setState] = useState(0);

  setTimeout(() => {
    state >= AboutBannerData.length - 1 ? setState(0) : setState(state + 1);
  }, 2000);

  return (
    <S.Banner>
      <G.Container>
        <S.BannerInner>
          <S.MainContent>
            <S.Title>
              <S.WhiteTitle>WE WERE HERE FOR</S.WhiteTitle>
              {AboutBannerData.map((data, index) => (
                <S.GreenTitle
                  key={index}
                  activeTitle={state === index ? true : false}
                >
                  {data.title}
                </S.GreenTitle>
              ))}
              <S.BannerStatus inline={true}>
                {[...Array(AboutBannerData.length)].map((item, index) => (
                  <StatusIcon key={index} active={state === index} />
                ))}
              </S.BannerStatus>
            </S.Title>
            <S.SubTitle>
              Gamius is is a full-service design agency, based in Ho Chi Minh
              city, Vietnam. We produce creative designs tailor-made for your
              vision to keep you at the top of your game.
            </S.SubTitle>
          </S.MainContent>
          <S.ImageWrap>
            {AboutBannerData.map((data, index) => (
              <BannerImage key={index} data={data} active={state === index} />
            ))}
          </S.ImageWrap>
        </S.BannerInner>
      </G.Container>
    </S.Banner>
  );
};
