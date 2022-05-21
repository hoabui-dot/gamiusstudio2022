import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrap = styled.div`
  ${tw`py-[80px]`}

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

export const WorkingProcess = styled.section`
  ${tw`flex flex-row flex-wrap justify-center items-center`}
`;
