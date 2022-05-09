import styled from "styled-components";
import tw from "twin.macro";

export const NavItem = styled.div`
${tw`h-[64px] ml-[48px] flex justify-center flex-col items-center`}
`;

export const NavUrl = styled.a`
${tw`text-[16px] text-[#F9FAFB]
  font-medium group-hover:text-[#C8FC03]
  h-full border-b-2 border-b-[#F9FAFB]
  flex justify-center flex-col items-center
  cursor-pointer hover:border-b-[#C8FC03]`}
`;

export const NavContact = styled.a`
${tw`bg-[#C8FC03] text-[16px] text-[#111827] m-[2px]
  rounded-l rounded-r-[20px] p-1 font-bold flex justify-between items-center gap-2
  cursor-pointer hover:bg-[#111827] hover:text-[#C8FC03] hover:border-2 hover:border-[#C8FC03] hover:m-0`}
`;

export const FlashIcon = styled.figure`
${tw`rounded-full bg-[#111827] h-6 w-6`}
`;
