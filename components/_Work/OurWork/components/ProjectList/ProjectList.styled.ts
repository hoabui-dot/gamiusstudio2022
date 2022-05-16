import styled from 'styled-components';
import tw from 'twin.macro';

export const ProjectList = styled.div`
  ${tw`grid md:gap-x-12 grid-cols-1 md:grid-cols-2 mt-12`}
`;

export const Project = styled.figure`
  ${tw``}
  &:nth-of-type(even) {
    margin-top: 48px;
  }
`;

export const WrapperImage = styled.figure`
  ${tw`relative`}

  .image {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.figcaption`
  ${tw`font-semibold sm:text-[24px] text-[20px] mt-4 cursor-pointer hover:text-green duration-250`}
  width: fit-content;
`;

export const SubTitle = styled.figcaption`
  ${tw`text-gray sm:text-[20px] text-[16px]`}
`;
