import styled from 'styled-components';
import tw from 'twin.macro';

export const OurCustomer = styled.div`
  ${tw`flex flex-col justify-center my-[104px]`}
`;

export const Slides = styled.div`
  ${tw`relative flex flex-wrap justify-center items-center mt-[15px] mb-[15px]`}
`;

export const Slide = styled.div`
  ${tw`flex justify-center items-center h-[50px] w-[134px] my-[5px] relative mx-[30px]`}

  .setHidden {
    ${tw`invisible`}
  }
`;

export const ChangeImg = styled.div`
  ${tw`absolute top-0 left-0 h-[50px ] w-[134px]`}

  .visible {
    ${tw`z-50`}
  }
`;

export const SizeImage = styled.figure`
  ${tw`h-[32px]`}
`;

export const Item = styled.div`
  ${tw`absolute h-[50px] w-[134px] mx-[30px] hover:filter-none`}
  filter: grayscale(100%);

  &.active {
    ${tw`filter-none`}
  }
`;
