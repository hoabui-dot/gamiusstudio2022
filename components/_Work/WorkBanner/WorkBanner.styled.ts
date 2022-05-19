import tw from 'twin.macro';
import styled from 'styled-components';

export const BannerWrap = styled.div`
  ${tw`relative flex justify-center items-center xl:py-[94px] lg:py-[50px] py-[35px]`}
`;

export const Linear = styled.div`
  ${tw`absolute bottom-[-1px] w-full h-[60px] z-[100]`}
  background: linear-gradient(180deg, rgba(7, 9, 17, 0) 0%, #070911 100%);
`;

export const WrapBackground = styled.div`
  ${tw`xl:min-h-[415px]  lg:min-h-[500px] sm:min-h-[400px] min-h-[250px]`}
`;

export const Background = styled.figure`
  ${tw`absolute top-0 bottom-0 duration-[250ms] w-full h-full overflow-hidden`}
`;

export const BackgroundDark = styled.div`
  ${tw`absolute top-0 left-0 z-[1] w-full h-full bg-[rgba(0,0,0,0.85)]`}
`;

export const Item = styled.div`
  ${tw`relative z-10 text-white`}
`;

export const Content = styled.div`
  ${tw`lg:mt-0 mt-[20px] text-white tracking-tight`}
`;

export const Title = styled.h1`
  ${tw`flex flex-wrap justify-center text-center xl:text-[43px] lg:text-[34px] text-3xl font-bold`}
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
  ${tw`text-center xl:text-2xl text-xl lg:mt-[55px] mt-[20px]`}
`;
