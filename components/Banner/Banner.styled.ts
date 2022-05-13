import styled from 'styled-components';
import tw from 'twin.macro';

export const Banner = styled.div`
  ${tw`relative flex justify-center items-center 
  xl:h-[623px] lg:h-[540px] md:h-[720px] h-[620px]`}
`;

export const Background = styled.div`
  ${tw`absolute w-full h-full overflow-hidden`};
`;
export const BackgroundDark = styled.div`
  ${tw`absolute top-0 left-0 z-[1] w-full h-full`} background-color: rgba(0,0,0,0.85)
`;

export const BannerItem = styled.div`
  ${tw`container flex lg:flex-row flex-col-reverse justify-center items-center`}
`;

export const BannerTitle = styled.div`
  ${tw`flex lg:justify-start justify-center md:text-5xl sm:text-4xl text-3xl font-bold`}
`;
export const BannerContent = styled.div`
  ${tw`relative z-10 lg:w-[50%] lg:mt-0 mt-[20px] text-white tracking-tight`}
`;

export const BannerImage = styled.div`
  ${tw`relative xl:w-[50%] lg:w-[56%] h-auto w-[85%] z-10`}
`;

export const TitleGreen = styled.div`
  ${tw`uppercase text-[#C8FC03] sm:ml-[12px] ml-[5px]`}
`;

export const TitleWhite = styled.div`
  ${tw`text-white capitalize `}
`;

export const BannerSubTitle = styled.div`
  ${tw`relative lg:text-left text-center md:text-2xl text-xl 
  lg:mt-[60px] mt-[20px] w-full xl:max-w-[525px] lg:max-w-[408px] 
  max-w-[525px]`}
`;

export const BannerStatus = styled.ul`
  ${tw`absolute flex top-[-15px] right-0 z-[70]`}
`;

export const Sticked = styled.li`
  ${tw`relative w-[17.76px] h-[23px] z-[90]`}
`;

export const StickedLight = styled.div`
  ${tw`absolute top-0 left-0 w-[17.76px] h-[23px] hidden`}

  &.active {
    ${tw`block`}
  }
`;

export const GreenColor = styled.span`
  ${tw`text-[#C8FC03]`}
`;

export const Linear = styled.div`
  ${tw`absolute bottom-[-1px] w-full h-[60px] z-[100]`}
  background: linear-gradient(180deg, rgba(7, 9, 17, 0) 0%, #070911 100%);
`;

export const BannerIcon = styled.div`
  ${tw`absolute w-[93px] h-[123px] left-[-75px] top-[-30px]`}
`;
