import styled from 'styled-components';
import tw from 'twin.macro';

//Background
export const WrapBackground = styled.div`
  ${tw`xl:min-h-[415px]  lg:min-h-[500px] sm:min-h-[400px] min-h-[250px]`}
`;

export const Background = styled.figure<{ activeBg: boolean }>`
  ${tw`absolute top-0 bottom-0 duration-[250ms] w-full h-full overflow-hidden`}
  ${({ activeBg }) => {
    return activeBg ? tw`opacity-100` : tw`opacity-0`;
  }}
`;

export const BackgroundDark = styled.div`
  ${tw`absolute top-0 left-0 z-[1] w-full h-full bg-[rgba(0,0,0,0.85)]`}
`;

export const Linear = styled.div`
  ${tw`absolute bottom-[-1px] w-full h-[60px] z-[100]`}
  background: linear-gradient(180deg, rgba(7, 9, 17, 0) 0%, #070911 100%);
`;

//Slide wrap
export const BannerWrap = styled.div`
  ${tw`relative flex justify-center items-center xl:py-[94px] lg:py-[50px] py-[35px] overflow-hidden`}
`;

export const Item = styled.div`
  ${tw`flex lg:flex-row flex-col-reverse justify-center items-center`}
`;

export const Content = styled.div`
  ${tw`relative z-10 lg:w-[55%] w-full lg:mt-0 mt-[20px] text-white tracking-tight`}
`;

//Title
export const Title = styled.h1`
  ${tw`flex flex-wrap lg:justify-start justify-center items-center text-center xl:text-[43px] lg:text-[34px] sm:text-3xl text-3xl font-bold`}
`;

export const WhiteTitle = styled.p`
  ${tw`text-white inline-block uppercase mr-2`}
`;

export const GreenTitleWrap = styled.div<{ activeTitle: boolean }>`
  ${({ activeTitle }) => {
    return activeTitle ? tw`opacity-100 block` : tw`opacity-0 hidden`;
  }}
`;

export const GreenTitle = styled.p`
  ${tw`uppercase text-green duration-250`}
`;

//Subtitle
export const SubTitleWrap = styled.div`
  ${tw`w-full lg:flex lg:flex-col`}
`;

export const SubTitle = styled.div`
  ${tw`relative lg:text-left text-center xl:text-2xl text-xl lg:mt-[55px] mt-[20px]`}
`;

export const GreenWord = styled.span`
  ${tw`text-green`}
`;

export const BannerIcon = styled.div`
  ${tw`absolute lg:w-[93px] w-[70px] lg:left-[-75px] left-[-57px] sm:top-[-30px] top-[-20px]`}
`;

export const SubTitleLine = styled.span``;

//Slide Image

export const Image = styled.figure<{ activeImage: boolean }>`
  ${tw`relative duration-[250ms] lg:w-[45%] w-full h-auto z-10`}
  ${({ activeImage }) => {
    return activeImage ? tw`block opacity-100` : tw`opacity-0 hidden`;
  }}
`;

export const BannerStatus = styled.ul`
  ${tw`absolute flex top-[-15px] 
  xl:right-[90px] 
  lg:right-[50px] 
  md:right-[60px] 
  right-0 z-[70]`}
`;
