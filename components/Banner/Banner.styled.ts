import styled from 'styled-components';
import tw from 'twin.macro';

export const Banner = styled.div`
  ${tw`relative min-w-full 2xl:h-[623px] xl:h-[500px] 
    lg:h-[400px] md:h-[280px] sm:h-[200px] h-[160px]`}
`;

export const Background = styled.div`
  ${tw`absolute w-full 2xl:h-[632px] 
    xl:h-[500px] lg:h-[400px] md:h-[280px] sm:h-[200px] h-[160px] 
    overflow-hidden`};
`;
export const BackgroundDark = styled.div`
  ${tw`absolute top-0 left-0 z-[1] w-full h-full`} background-color: rgba(0,0,0,0.9)
`;

export const BannerItem = styled.div`
  ${tw`flex justify-center items-center pt-[60px] pb-[60px]`}
`;

export const BannerTitle = styled.div`
  ${tw`flex text-[15px] xl:text-5xl lg:text-4xl sm:text-2xl sm:mr-[10px] mr-[5px]
    font-bold md:mr-[20px] sm:mt-[-35px] mt-[-40px]`}
`;
export const BannerContent = styled.div`
  ${tw`relative z-10 text-white tracking-tight`}
`;

export const TitleGreen = styled.div`
  ${tw`uppercase text-[#C8FC03] ml-[px] sm:ml-[4px]`}
`;

export const TitleWhite = styled.div`
  ${tw`text-white capitalize `}
`;

export const BannerImage = styled.div`
  ${tw`relative 2xl:w-[632px]
     2xl:h-[503px] xl:w-[480px] xl:h-[360px] lg:w-[360px] lg:h-[280px] 
     md:w-[280px] md:mt-[-30px] sm:mt-[-35px] lg:mt-0 sm:w-[200px] w-[140px] mt-[-40px] z-10`}
`;

export const BannerSubTitle = styled.p`
  ${tw`text-xs xl:text-2xl 2xl:w-[584px] sm:text-sm xl:w-[500px] 
    lg:w-[370px] md:w-[260px] sm:w-[200px] w-[140px] md:text-base md:leading-4 sm:leading-3 font-normal 
    xl:mt-[50px] lg:mt-[25px] sm:mt-[15px] mt-[6px] leading-[11px]`}
`;

export const GreenColor = styled.span`
  ${tw`text-[#C8FC03]`}
`;

export const BannerIcon = styled.div`
  ${tw`absolute xl:w-[110px] lg:w-[70px] xl:bottom-[-13%] lg:bottom-[-16%] 
    2xl:left-[-15.5%] xl:left-[-19%] lg:left-[-16%] z-50 md:w-[50px] sm:left-[-17%]
    md:bottom-[-16%] w-[40px] left-[-24%] bottom-[12%]`}
`;

export const BannerStatus = styled.ul`
  ${tw`absolute flex xl:top-[40%] lg:top-[22%]md:top-[-4%] top-[-18px] right-[13%] z-[70]`}
`;

export const Sticked = styled.li`
  ${tw`relative lg:w-[17px] sm:w-[12px] w-[9px] md:w-[14px] h-[23px] z-[90]`}
`;

export const StickedLight = styled.div`
  ${tw`mt-[-10px] lg:w-[18px] sm:w-[13px] w-[10px] lg:mt-[-18px] sm:mt-[-12px] md:w-[14px] hidden`}

  &.active {
    ${tw`block`}
  }
`;
