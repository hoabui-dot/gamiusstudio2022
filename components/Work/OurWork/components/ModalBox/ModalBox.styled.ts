import tw from 'twin.macro';
import styled, { keyframes } from 'styled-components';

export const ModalBox = styled.div`
  ${tw`fixed top-0 left-0 py-[100px] w-full h-full bg-[rgba(0,0,0,0.5)] overflow-auto duration-250
    opacity-0 z-[-1]
  `}

  &.active {
    ${tw`opacity-100 z-[99999999]`}
    .modal-content {
      ${tw`top-0`}
    }
  }
`;

export const ModalContent = styled.figure`
  ${tw`w-4/5 mx-auto duration-250 md:w-3/5
    relative top-[-1000px] ease-in-out
  `}
`;
