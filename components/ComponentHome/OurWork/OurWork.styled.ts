import styled from 'styled-components';
import tw from 'twin.macro';

const greenMint = '#C8FC03';

export const OurWork = styled.div`
  ${tw`md:py-[70px] py-[50px]`}
`;

export const Container = styled.div`
  ${tw`container`}
`;

export const InnerSwiper = styled.div`
  ${tw`relative mx-auto mt-7 flex justify-center text-white h-auto`}
`;

export const WrapperSwiper = styled.div`
  ${tw`relative`}

  .mySwiper {
    box-shadow: 0px 45.9087px 45.9087px rgba(69, 42, 124, 0.15);
    position: unset;
    ${tw`sm:w-[70vw] w-[90vw] max-w-[1065px] h-auto border-[3px] border-[${greenMint}] rounded-t-[30px] border-b-0`}

    .swiper-pagination {
      ${tw`absolute bottom-[-25px]`}

      .swiper-pagination-bullet {
        ${tw`bg-[#d1d5db]`}
      }

      .swiper-pagination-bullet-active {
        ${tw`bg-[${greenMint}]`}
      }
    }
  }
`;

export const WrapperImage = styled.figure`
  ${tw`relative`}
`;

export const TitleSwiper = styled.div`
  ${tw`bg-[#C8FC03] text-center text-[black] font-bold rounded-b-[30px] lg:text-[24px] text-[16px] `}
`;
