import styled from 'styled-components';
import tw from 'twin.macro';

export const WrapperImageUpLeft = styled.figure`
  ${tw`absolute w-[13vw] top-0 left-[10%] `}
`;

export const WrapperImageBottomLeft = styled.figure`
  ${tw`absolute w-[13vw] bottom-12 left-[10%]`}
`;

export const WrapperImageMiddleRight = styled.figure`
  ${tw`absolute w-[13vw] top-1/3 right-[7%] transform -translate-x-1/2 -translate-y-1/2`}
`;
