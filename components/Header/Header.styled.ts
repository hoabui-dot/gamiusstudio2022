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
    lg:pt-5 lg:pb-0
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
    lg:static lg:flex-row lg:bg-transparent lg:h-auto lg:p-0 lg:items-center lg:w-auto
    fixed top-0 left-[-270px] flex-col h-screen bg-[#070911] z-[99999] pt-[60px] px-[20px] items-start w-[270px]
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
    lg:hidden
    block
  `}
  &.show {
    ${tw`
      fixed
      left-[230px]
      z-[999999]
    `}
  }
`;

export const LeftContentWrap = styled.div`
  ${tw`flex items-center flex-shrink-0 flex-grow gap-4`}
`;

export const ContactButton = styled.a`
  ${tw`bg-none text-[14px] leading-[17px] text-[#A5D10A] border-[#A5D10A] border-2
    rounded-[4px] py-2 px-[14px] font-bold justify-between items-center gap-2
    cursor-pointer hover:bg-[#A5D10A] hover:text-[#111827] duration-[250ms]
    lg:hidden
    w-auto
    flex
  `}
`;
