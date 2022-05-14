import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.div`
  ${tw`bg-black`}
`;

export const HeaderContainer = styled.div`
  ${tw`container`}
`;

export const HeaderInner = styled.div`
  ${tw`
    flex justify-between items-center
    md:pt-5 md:pb-0
    py-5 
  `}
`;

export const HeaderLogo = styled.a`
  ${tw`
    max-w-[100px] w-full min-h-[32px] relative block
    flex-shrink-0 flex-grow cursor-pointer
  `}
`;

export const HeaderNav = styled.div<{ show: boolean }>`
  ${tw`
    flex duration-300
    md:static md:flex-row md:bg-transparent md:h-auto md:p-0 md:items-center md:w-auto
    fixed top-0 -left-full flex-col h-screen bg-black z-[99999] pt-[60px] px-5 items-start w-full
  `}

  ${({ show }) => show && tw`left-0`}
`;

export const IconWrap = styled.div<{ relocate: boolean }>`
  ${tw`
    duration-500 z-[999999]
    relative right-0
    md:hidden
    block
  `}

  ${({ relocate }) => relocate && tw`fixed right-5`}
`;

export const LeftContentWrap = styled.div`
  ${tw`
    flex items-center flex-shrink-0 flex-grow gap-4
  `}
`;

export const ContactButton = styled.a`
  ${tw`
    bg-none text-sm leading-[17px] text-green border-green border-2
    rounded-[4px] py-2 px-[14px] font-bold justify-between items-center gap-2
    cursor-pointer hover:bg-green hover:text-black-light duration-250
    md:hidden
    w-auto
    flex
  `}
`;
