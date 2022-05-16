import styled from 'styled-components';
import tw from 'twin.macro';

export const ProjectList = styled.div`
  ${tw`grid sm:gap-x-12 md:gap-y-0 gap-12 grid-cols-1 md:grid-cols-2 mt-12`}
`;

export const Project = styled.figure`
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
