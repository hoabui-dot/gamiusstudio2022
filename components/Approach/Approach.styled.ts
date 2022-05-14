import styled from 'styled-components';
import tw from 'twin.macro';

export const Background = styled.div`
  ${tw`pb-[80px] pt-[60px] z-[2]`}
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
export const Grid = styled.div`
  ${tw`grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-[74px]`}
`;
