import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  ${tw`container mx-auto px-4 py-8  flex flex-col lg:flex-row flex-wrap justify-start lg:justify-between lg:items-center text-white`}
`;

export const FooterText = styled.p`
  ${tw`text-black text-3xl font-bold underline`}
`;

export const FooterButton = styled.button`
  ${tw`bg-red-500 py-4 px-5 rounded hover:bg-red-600`}
`;
