import styled from 'styled-components';
import tw from 'twin.macro';

export const Service = styled.div`
  ${tw`pt-[80px] pb-[60px] relative`}
`;

export const FlashTheme = styled.figure`
  ${tw`max-w-[134px] min-h-[180px] w-full
  absolute
  md:block
  hidden
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
