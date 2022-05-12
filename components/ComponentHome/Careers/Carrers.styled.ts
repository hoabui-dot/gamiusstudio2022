import styled from 'styled-components';
import tw from 'twin.macro';

export const Carrers = styled.div`
  ${tw`relative min-w-full h-full`}
`;

export const Background = styled.div`
  ${tw`absolute top-0 left-0 right-0 bottom-0 w-full h-full`};
`;

export const WrapperImage = styled.figure`
  ${tw``}
`;

export const ContentCarrer = styled.div`
  ${tw`relative z-30 pt-11`}
`;

export const Container = styled.div`
  ${tw`container flex lg:flex-row flex-wrap justify-center gap-x-6 gap-y-6 mt-9`}
`;

export const Center = styled.div`
  ${tw`text-center pb-10`}
`;
