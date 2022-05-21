import styled from 'styled-components';
import tw from 'twin.macro';

export const Careers = styled.div`
  ${tw`relative min-w-full h-full md:py-[70px] py-[50px]`}
`;

export const Background = styled.div`
  ${tw`absolute  bottom-0 top-0 w-full h-full`};
`;

export const WrapperImage = styled.figure`
  ${tw``}
`;

export const ContentCareer = styled.div`
  ${tw`relative z-30`}
`;

export const CenterDiv = styled.div`
  ${tw`grid 2xl:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-6 mt-9`}
`;

export const Center = styled.div`
  ${tw`text-center`}
`;
