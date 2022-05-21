import styled from 'styled-components';
import tw from 'twin.macro';

export const BtnDetail = styled.a`
  ${tw`cursor-pointer duration-200 w-auto inline-block mt-4 px-4 py-3 text-green border border-green rounded-[6px] `}

  &:hover {
    ${tw`text-gray-dark bg-green`}
  }
`;

export const BtnDetailRevert = styled.a`
  ${tw`bg-green cursor-pointer duration-200 w-auto inline-block mt-4 px-4 py-3 text-gray-dark border border-green rounded-[6px] `}

  &:hover {
    ${tw`text-green bg-black`}
  }
`;
