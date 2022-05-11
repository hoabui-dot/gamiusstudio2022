import styled from 'styled-components';
import tw from 'twin.macro';

const greenMint = '#C8FC03';
const boxWidth = '395px';
const textGray = '#F3F4F6';
export const WrapperCard = styled.div`
  ${tw`duration-200 border rounded-[6px] border-[${greenMint}] w-[${boxWidth}] text-[white] p-4`}
  &:hover {
    background: #ffffff73;
  }
`;

export const Title = styled.p`
  ${tw`font-bold tracking-wide`}
`;

export const SubTitle = styled.p`
  ${tw`text-[${textGray}]`}
`;

export const WrapperInfo = styled.div`
  ${tw`flex items-center 
  `}
`;

export const Info = styled.div`
  ${tw`mt-2`}
`;

export const P__Info = styled.p`
  ${tw`ml-1 mr-5 text-[${textGray}]`}
`;
