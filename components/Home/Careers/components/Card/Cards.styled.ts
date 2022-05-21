import styled from 'styled-components';
import tw from 'twin.macro';

const cardBG = '#070911BF';
const cardHover = '#ffffff73';

export const WrapperCard = styled.div`
  ${tw`bg-[${cardBG}] duration-200 border rounded-[6px] border-green text-white p-6`}

  &:hover {
    ${tw`bg-[${cardHover}]`}
  }
`;

export const Title = styled.p`
  ${tw`font-bold tracking-wide`}
`;

export const SubTitle = styled.p`
  ${tw`text-gray-lighter`}
`;

export const WrapperInfo = styled.div`
  ${tw`flex items-center`}
`;

export const Info = styled.div`
  ${tw`flex mt-6 mb-4`}
`;

export const P__Info = styled.p`
  ${tw`ml-1 mr-5 text-gray-lighter`}
`;
