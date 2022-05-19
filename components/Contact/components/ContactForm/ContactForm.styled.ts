import tw from 'twin.macro';
import styled from 'styled-components';

export const Form = styled.div`
  ${tw`flex flex-col p-[20px] rounded-[20px] text-white text-base`}

  .formItem {
    ${tw`pl-[10px] flex flex-row items-start w-full h-[39px] bg-black/75 rounded-[9px] border-none outline-none`}
    &::placeholder {
      ${tw`text-white`}
    }
  }

  .message {
    ${tw`h-[184px] overflow-hidden`}
  }
  .button {
    ${tw`bg-green text-black font-semibold w-[146px] h-[43px] rounded-[6px]`}
  }
`;

export const Input = styled.div`
  ${tw`mb-[20px]`}
`;

export const Required = styled.div`
  ${tw`text-red-600`}
`;
