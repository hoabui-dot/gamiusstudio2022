import styled from 'styled-components';
import tw from 'twin.macro';

export const ErrorSection = styled.div`
  ${tw`bg-error bg-no-repeat bg-center bg-cover relative blur-2xl flex flex-col items-start justify-center
    md:min-h-[880px]
    min-h-[600px]
  `}
  &:before {
    ${tw`
      bg-black-70 absolute left-0 top-0 h-full w-full content-[''] mix-blend-normal
    `}
  }
  &:after {
    ${tw`
      bg-black-75 absolute left-0 top-0 h-full w-full content-[''] mix-blend-hue
    `}
  }
`;

export const ErrorSectionInner = styled.div`
  ${tw`relative z-10 w-4/5 mx-auto`}
`;

export const ErrorImage = styled.figure`
  ${tw`relative max-w-[316px] w-full min-h-[116px] mb-5`}
`;

export const ErrorText = styled.p`
  ${tw`text-gray-light text-2xl leading-[29px] font-normal`}
`;
