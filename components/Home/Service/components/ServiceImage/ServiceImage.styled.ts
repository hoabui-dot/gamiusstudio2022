import styled from 'styled-components';
import tw from 'twin.macro';

export const ServiceImage = styled.figure`
  ${tw`absolute top-0 left-0 w-full h-full
  opacity-0 duration-[250ms]
  `}
  &.active {
    ${tw`opacity-100`}
  }
`;
