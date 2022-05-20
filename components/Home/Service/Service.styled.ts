import styled from 'styled-components';
import tw from 'twin.macro';

export const Service = styled.div`
  ${tw`md:pt-[80px] md:pb-[30px] py-[30px] relative`}
`;

export const FlashTheme = styled.figure`
  ${tw`
    w-full
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
  ${tw`text-4xl font-bold text-green mb-4`}
`;

export const SubTitle = styled.h3`
  ${tw`text-base font-medium text-white`}
`;

export const ServiceInner = styled.div`
  ${tw`flex justify-between items-center
    lg:flex-row lg:gap-5
    flex-col-reverse gap-0
  `}
`;

export const ServiceImageWrap = styled.div`
  ${tw`relative
    flex-shrink-0 flex-grow
    lg:w-1/2 lg:min-h-[600px]
    sm:min-h-[500px]
    w-full min-h-[350px]
  `}
`;

export const ServiceList = styled.div`
  ${tw`
    lg:w-1/2
    w-full
  `}
`;
