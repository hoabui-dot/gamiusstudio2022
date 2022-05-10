import styled from 'styled-components';
import tw from 'twin.macro';

export const ClientSays = styled.div`
  ${tw`flex flex-col justify-center items-center`}
`;

export const Slides = styled.div`
    ${tw`flex flex-wrap justify-center items-center mt-[40px]`}
`

export const Slide = styled.div`
    ${tw`h-[54px] w-[160px] relative mx-[30px] my-[10px]`}
`

export const SizeImage = styled.figure`
  ${tw`h-[32px]`}
`;
