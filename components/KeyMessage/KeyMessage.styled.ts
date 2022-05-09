import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  ${tw`container 
  mx-auto 
  px-4 
  py-8  flex flex-col lg:flex-row flex-wrap justify-start lg:justify-between lg:items-center text-white`}
  
`;

export const Text = styled.div`
    ${tw`mx-auto bg-[#070911] w-[740px]`}
`;

