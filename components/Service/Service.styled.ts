import styled from 'styled-components';
import tw from 'twin.macro';

export const Service = styled.div`
  ${tw`pt-[80px] pb-[60px] relative`}
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

export const FlashTheme = styled.figure`
  ${tw`w-full
  absolute
  md:max-w-[134px] md:min-h-[180px]
  max-w-[67px] min-h-[90px]
  `}

  &.first {
    ${tw`top-[4%] left-[4%]`}
  }
  &.second {
    ${tw`top-[4%] right-[4%]`}
  }
  &.third {
    ${tw`bottom-[4%] right-[4%]`}
  }
`;

export const SectionTitle = styled.div`
  ${tw`text-center my-5`}
`;

export const Title = styled.h2`
  ${tw`text-4xl font-bold text-[#C8FC03] mb-4`}
`;

export const SubTitle = styled.h3`
  ${tw`text-base font-medium text-[#FFFFFF]`}
`;

export const ServiceContainer = styled.div`
  ${tw`container`}
`;

export const ServiceInner = styled.div``;

export const ServiceContent = styled.div`
  ${tw`flex justify-between items-center
    lg:flex-row lg:gap-0
    flex-col-reverse
    gap-5
  `}
`;

export const ServiceImageWrap = styled.div`
  ${tw`relative
    flex-shrink-0 flex-grow
    lg:w-1/2 lg:min-h-[600px]
    sm:min-h-[500px]
    w-full min-h-[400px]
  `}
`;

export const ServiceList = styled.div`
  ${tw`
    lg:w-1/2
    w-full
  `}
`;
