import styled from 'styled-components';
import tw from 'twin.macro';

export const Banner = styled.div`
  ${tw`py-[60px] duration-250`}
`;

export const BannerInner = styled.div`
  ${tw`flex lg:flex-row flex-col-reverse justify-center items-center gap-x-10`}
`;

export const MainContent = styled.div`
  ${tw`relative z-10 lg:w-[55%] w-full lg:mt-0 mt-[20px] text-white tracking-tight`}
`;

//Title
export const Title = styled.h1<{ textCenterTitle?: boolean }>`
  ${tw`flex flex-wrap justify-center items-center text-center xl:text-[43px] lg:text-[34px] sm:text-3xl text-3xl font-bold gap-y-2`}
  ${({ textCenterTitle }) => {
    return textCenterTitle ? '' : tw`lg:justify-start`;
  }}
`;

export const WhiteTitle = styled.p`
  ${tw`text-white uppercase mr-2`}
`;

export const GreenTitle = styled.p<{ activeTitle: boolean }>`
  ${tw`uppercase text-green duration-[250ms]`}
  ${({ activeTitle }) => {
    return activeTitle ? tw`opacity-100 block` : tw`opacity-0 hidden`;
  }}
`;

export const SubTitle = styled.p`
  ${tw`lg:mt-[60px] mt-[20px] font-medium text-white lg:text-left text-center text-base lg:text-lg xl:text-xl`}
`;

export const BannerStatus = styled.ul<{ inline: boolean }>`
  ${tw`absolute flex top-[-15px] xl:right-[85px] lg:right-[60px] right-0 z-[70]`}
  ${({ inline }) => {
    return inline && tw`static ml-3`;
  }}
`;

export const ImageWrap = styled.div`
  ${tw`lg:w-[45%] w-full min-h-[200px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[350px] relative  duration-250`}
`;
