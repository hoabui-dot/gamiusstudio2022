import styled from 'styled-components';
import tw from 'twin.macro';

const greenMint = '#C8FC03';

export const BtnDetail = styled.a`
  ${tw`cursor-pointer duration-200 w-auto inline-block mt-4 px-4 py-3 text-[${greenMint}] border border-[${greenMint}] rounded-[6px] `}
  &:hover {
    background-color: ${greenMint};
    color: #1f2937;
  }
`;

export const BtnDetailRevert = styled.a`
  ${tw`bg-[${greenMint}] cursor-pointer duration-200 w-auto inline-block mt-4 px-4 py-3 text-[#1f2937] border border-[${greenMint}] rounded-[6px] `}
  &:hover {
    background-color: #070911;
    color: ${greenMint};
  }
`;
