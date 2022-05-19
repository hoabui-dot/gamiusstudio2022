import styled from 'styled-components';
import tw from 'twin.macro';

export const ProjectItem = styled.figure`
  ${tw`relative even:mt-0 md:even:mt-12`}
`;

export const WrapperImage = styled.figure`
  ${tw`relative hover:cursor-pointer`}
`;

export const Title = styled.figcaption`
  ${tw`font-semibold sm:text-[24px] text-[20px] mt-4 cursor-pointer hover:text-green duration-250`}
  width: fit-content;
`;

export const SubTitle = styled.figcaption`
  ${tw`text-gray sm:text-[20px] text-[16px]`}
`;
