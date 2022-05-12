import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`container mx-auto px-4 py-8 flex justify-center text-white h-auto `}
`;

export const WrapperSwiper = styled.div`
  ${tw`relative`}

  .mySwiper {
    height: auto;
    width: 70vw;
    max-width: 1065px;
    border: 3px solid #c8fc03;
    box-shadow: 0px 45.9087px 45.9087px rgba(69, 42, 124, 0.15);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom: none;
    position: unset;

    .swiper-pagination {
      position: absolute;
      bottom: -25px;

      .swiper-pagination-bullet {
        background: #d1d5db;
      }

      .swiper-pagination-bullet-active {
        background: #c8fc03;
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
