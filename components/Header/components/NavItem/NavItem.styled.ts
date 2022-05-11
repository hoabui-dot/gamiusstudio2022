import styled from 'styled-components';
import tw from 'twin.macro';

export const NavItem = styled.div`
  ${tw`h-[64px] flex justify-center flex-col items-center
  
    lg:w-auto lg:ml-12
    w-full
  `}
`;

export const NavUrl = styled.a`
  ${tw`text-[16px] text-[#F9FAFB]
    font-medium
    h-full border-b-2 border-b-[#F9FAFB]
    flex justify-center flex-col items-center
    cursor-pointer
    lg:w-auto
    w-full
  `}
  &.active, &:hover {
    ${tw`border-b-[#C8FC03] text-[#C8FC03]`}
  }
`;

export const NavContact = styled.a`
  ${tw`bg-[#C8FC03] text-[16px] text-[#111827] m-[2px]
    rounded-l rounded-r-[20px] p-1 font-bold justify-between items-center gap-2
    cursor-pointer hover:bg-[#111827] hover:text-[#C8FC03] hover:border-2 hover:border-[#C8FC03] hover:m-0
    lg:flex
    hidden
  `}
`;

export const FlashIcon = styled.figure`
  ${tw`rounded-full bg-[#111827] h-6 w-6 p-[4px]`}
`;
