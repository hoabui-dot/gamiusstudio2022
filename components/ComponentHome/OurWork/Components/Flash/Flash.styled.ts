import styled from 'styled-components';
import tw from 'twin.macro';

export const WrapperImageUpLeft = styled.figure`
  ${tw`absolute top-3 left-28 lg:block hidden`}
`;

export const WrapperImageBottomLeft = styled.figure`
  ${tw`absolute bottom-16 left-28`}
`;

export const WrapperImageMiddleRight = styled.figure`
  ${tw`absolute top-1/2 right-28 transform -translate-x-1/2 -translate-y-1/2`}
`;
