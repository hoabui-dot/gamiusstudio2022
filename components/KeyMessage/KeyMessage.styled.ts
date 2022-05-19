import styled from 'styled-components';
import tw from 'twin.macro';

const greenMint = '#C8FC03';

export const KeyMessage = styled.div`
  ${tw`py-[40px]`}
`;

export const WrapperKeyMessage = styled.div`
  ${tw`flex justify-center mx-auto`}
  width: fit-content
`;

export const WrapperImage = styled.figure`
  ${tw`xl:min-w-[70px] min-w-[45px]`}
`;

export const Text = styled.div<{type?: boolean}>`
  ${({type}) => {
    return type
      ? tw`xl:text-[30px] text-[20px]`
      : tw`xl:text-[24px] text-[17px]`;
  }}
  ${tw`mx-auto text-right max-w-[740px] xl:ml-14 ml-7 mt-4 text-white font-bold`}
  
  span {
    ${tw`text-[${greenMint}] `}
  }
`;
