import styled from 'styled-components';
import tw from 'twin.macro';

//Background
export const Background = styled.figure`
  ${tw`absolute top-0 bottom-0 duration-[250ms] opacity-0 w-full h-full overflow-hidden`}
  &.active {
    ${tw`opacity-[1]`}
  }
`;

export const BackgroundDark = styled.div`
  ${tw`absolute top-0 left-0 z-[1] w-full h-full bg-[rgba(0,0,0,0.85)]`}
`;

export const Linear = styled.div`
  ${tw`absolute bottom-0 w-full h-[60px] z-[100]`}
  background: linear-gradient(180deg, rgba(7, 9, 17, 0) 0%, #070911 100%);
`;

//Slide wrap
export const BannerWrap = styled.div`
  ${tw`relative flex justify-center items-center h-full xl:py-[94px] lg:py-[50px] py-[35px]`}
`;

export const Item = styled.div`
  ${tw`flex lg:flex-row flex-col-reverse justify-center items-center`}
`;

export const Content = styled.div`
  ${tw`relative z-10 lg:w-[50%] lg:mt-0 mt-[20px] text-white tracking-tight`}
`;

//Title
export const Title = styled.h1`
  ${tw`flex xs:flex-row flex-col lg:justify-start justify-center text-center xl:text-[44px] lg:text-[34px] sm:text-4xl text-3xl font-bold`}
`;

export const WhiteTitle = styled.p`
  ${tw`text-white capitalize `}
`;

export const GreenTitle = styled.p`
  ${tw`uppercase text-green duration-[250ms] sm:ml-[8px] ml-[5px] opacity-0 hidden`}

  &.active {
    ${tw`opacity-[1] block`}
  }
`;

//Subtitle
export const SubTitleWrap = styled.div`
  ${tw`w-full xl:max-w-[525px] lg:max-w-[408px] max-w-[525px]`}
`;

export const SubTitle = styled.div`
  ${tw`relative lg:text-left text-center xl:text-2xl text-xl 
  lg:mt-[55px] mt-[20px] w-full`}
`;

export const GreenWord = styled.span`
  ${tw`text-green`}
`;

export const BannerIcon = styled.div`
  ${tw`absolute sm:w-[93px] w-[70px] sm:left-[-75px] left-[-54px] sm:top-[-30px] top-[-20px]`}
`;

//Slide Image
export const Image = styled.figure`
  ${tw`relative duration-[250ms] xl:w-[50%] lg:w-[56%] h-auto w-[85%] z-10  opacity-0 hidden`}

  &.active {
    ${tw`block opacity-[1]`}
  }
`;

export const BannerStatus = styled.ul`
  ${tw`absolute flex top-[-15px] xl:right-[18px] lg:right-[40px] right-0 z-[70]`}
`;

export const StatusIcon = styled.li`
  ${tw`relative w-[17.76px] h-[23px] z-[90]`}
`;

export const StatusIconLight = styled.div`
  ${tw`absolute top-0 left-0 w-[17.76px] h-[23px] hidden`}

  &.active {
    ${tw`block`}
  }
`;
