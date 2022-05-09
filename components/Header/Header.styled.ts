import styled from "styled-components";
import tw from "twin.macro";

export const Header = styled.div`
  ${tw`bg-gradient-to-l from-[#060910] to-[#070911]`}
`

export const HeaderContainer = styled.div`
  ${tw`container`}
`;

export const HeaderInner = styled.div`
  ${tw`pt-5 flex justify-between items-center`}
`;

export const HeaderLogo = styled.a`
  ${tw`max-w-[93px] w-full flex-shrink-0 flex-grow cursor-pointer block`}
`;

export const HeaderNav = styled.div`
${tw`flex`}
`;

