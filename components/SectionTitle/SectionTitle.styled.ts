import styled from 'styled-components';
import tw from 'twin.macro';

export const titleSection = styled.div`
  ${tw`text-center`}
`;

export const Title = styled.p<{ textColor: boolean }>`
  ${tw`text-[36px] font-bold`}
  ${({ textColor }) => {
    return textColor ? tw`text-white` : tw`text-green`;
  }}
`;

export const Description = styled.p<{ textColor: boolean }>`
  ${tw`text-[16px] mt-[16px] text-white font-medium`}
  ${({ textColor }) => {
    return textColor ? tw`text-[#9CA3AF]` : tw`text-white`;
  }}
`;
