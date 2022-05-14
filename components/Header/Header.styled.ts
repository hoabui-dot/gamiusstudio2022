import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.div`
  ${tw`bg-[#070911]`}
`;

export const HeaderContainer = styled.div`
  ${tw`container`}
`;

export const HeaderInner = styled.div`
  ${tw`py-5 flex justify-between items-center
    md:pt-5 md:pb-0
  `}
`;

export const HeaderLogo = styled.a`
  ${tw`
    max-w-[93px] w-full flex-shrink-0 flex-grow cursor-pointer block
  `}
`;

export const HeaderNav = styled.div`
  ${tw`
    flex
    md:static md:flex-row md:bg-transparent md:h-auto md:p-0 md:items-center md:w-auto
    fixed top-0 left-[-100%] flex-col h-screen bg-[#070911] z-[99999] pt-[60px] px-[20px] items-start w-full
    duration-300
  `}
  &.show {
    ${tw`
      left-0
    `}
  }
`;

export const IconWrap = styled.div`
  ${tw`
    duration-[250ms]
    md:hidden
    block
  `}
  &.show {
    ${tw`
      fixed
      right-5
      z-[999999]
    `}
  }
`;

export const LeftContentWrap = styled.div`
  ${tw`flex items-center flex-shrink-0 flex-grow gap-4`}
`;

export const ContactButton = styled.a`
  ${tw`bg-none text-[14px] leading-[17px] text-green border-green border-2
    rounded-[4px] py-2 px-[14px] font-bold justify-between items-center gap-2
    cursor-pointer hover:bg-green hover:text-[#111827] duration-[250ms]
    md:hidden
    w-auto
    flex
  `}
`;
