import styled from 'styled-components';
import tw from 'twin.macro';

const greenMint = '#C8FC03';
const textGray = '#F3F4F6';

export const WrapperCard = styled.div`
  ${tw`bg-[#070911BF] duration-200 border rounded-[6px] border-[${greenMint}] text-[white] p-6`}

  &:hover {
    ${tw`bg-[#ffffff73]`}
  }
`;

export const Title = styled.p`
  ${tw`font-bold tracking-wide`}
`;

export const SubTitle = styled.p`
  ${tw`text-[${textGray}]`}
`;

export const WrapperInfo = styled.div`
  ${tw`flex items-center`}
`;

export const Info = styled.div`
  ${tw`flex mt-6 mb-4`}
`;

export const P__Info = styled.p`
  ${tw`ml-1 mr-5 text-[${textGray}]`}
`;
