import styled from 'styled-components';
import tw from 'twin.macro';

export const FooterList = styled.div`
  ${tw`flex flex-col w-full`}
`;

export const ListTitle = styled.h2`
  ${tw`font-semibold text-sm text-[#1F2937] capitalize
    md:mb-4
    mb-2
  `}
`;

export const ListItem = styled.a`
  ${tw`text-[#1F2937] text-sm capitalize font-normal cursor-pointer
    md:my-2
    my-1
  `}
`;
