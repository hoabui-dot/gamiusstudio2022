import styled from 'styled-components';
import tw from 'twin.macro';
const greenMint = '#C8FC03';

export const BackgroundSquare = styled.div`
  z-index: 2;
  position: relative;
  background-size: auto auto;
  background-color: rgba(7, 9, 17, 1);
  background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 15px,
      rgba(122, 123, 124, 0.15) 15px,
      rgba(122, 123, 124, 0.15) 16px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 15px,
      rgba(122, 123, 124, 0.14901960784313725) 15px,
      rgba(122, 123, 124, 0.14901960784313725) 16px
    );
`;

export const Container = styled.div`
  ${tw`container mx-auto px-12 flex justify-center `}
`;

export const WrapperKeyMessage = styled.div`
  ${tw`flex justify-center`}
  width: fit-content
`;

export const WrapperImage = styled.figure`
  ${tw`xl:min-w-[70px] min-w-[45px]`}
`;

export const Text = styled.div<{ type2?: boolean }>`
  ${({ type2 }) =>
    type2
      ? `
  ${tw`xl:text-[30px] text-[20px] `}
  `
      : `
  ${tw`xl:text-[24px] text-[17px]`}
    `}
  ${tw`mx-auto text-right max-w-[740px]  xl:ml-14 ml-7  mt-4  text-white`}

  span {
    color: ${greenMint};
  }
`;
