import styled from 'styled-components';
import tw from 'twin.macro';

export const ServiceItem = styled.div`
  ${tw`my-5 flex items-center justify-between gap-5 cursor-pointer`}
  &:hover, &.active {
    .textWrap {
      .title {
        ${tw`text-[#C8FC03]`}
      }
      .description {
        ${tw`text-[#FFFFFF]`}
      }
    }
    .flashFillWrap {
      ${tw`block animate-zoomIn`}
    }
    .flashWrap {
      ${tw`hidden`}
    }
  }
`;

export const TextWrap = styled.div`
  ${tw`w-full min-h-[84px] flex justify-center flex-col`}
`;

export const Title = styled.h2`
  ${tw`text-[#FFFFFF] text-lg font-bold duration-[250ms]`}
`;

export const Description = styled.p`
  ${tw`text-[#9CA3AF] text-base font-normal duration-[250ms]`}
`;

export const FlashWrap = styled.figure`
  ${tw`relative w-full max-w-[11px] min-h-[42px]`}
`;

export const FlashFillWrap = styled.figure`
  ${tw`relative w-full max-w-[22px] min-h-[84px] hidden`}
`;
