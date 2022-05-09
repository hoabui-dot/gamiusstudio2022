import styled from 'styled-components';
import tw from 'twin.macro';

export const Footer = styled.div`
  ${tw`bg-[#C8FC03]`}
`;

export const FooterContainer = styled.div`
  ${tw`container`}
`;

export const FooterAbove = styled.div`
  ${tw`min-h-[200px] border-b-[1px] border-b-[#1F2937]`}
`;

export const FooterAboveInner = styled.div`
  ${tw`pt-16 pb-6 flex justify-between`}
`;

export const FooterBelow = styled.p`
  ${tw`text-[#1F2937] m-auto text-center py-6`}
`;

export const FooterLogo = styled.figure`
  ${tw`max-w-[308px] w-full flex-shrink-0 flex-grow mb-2`}
`;

export const MainInfo = styled.div`
  ${tw``}
`;
export const AboutUs = styled.div`
  ${tw``}
`;
export const Works = styled.div`
  ${tw``}
`;

export const FooterItem = styled.p`
  ${tw`text-sm font-normal py-1`}
  .bold {
    ${tw`font-medium`}
  }
`;
