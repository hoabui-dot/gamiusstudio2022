import styled from 'styled-components';
import tw from 'twin.macro';

export const Contact = styled.div`
  ${tw`flex justify-center items-center relative w-full h-[881px]`}
`;

export const Background = styled.div`
  ${tw`absolute w-full h-[881px] top-0 left-0 z-0`}
`;

export const ContentWrap = styled.div`
  ${tw`relative flex lg:flex-row flex-col-reverse w-full h-full z-10`}
`;

export const Content = styled.div`
  ${tw`lg:w-[50%] w-full mr-[32px]`}
`;

export const List = styled.div`
  ${tw`lg:w-[50%] w-full bg-black/50 rounded-[8px]`}
`;

export const Title = styled.p`
  ${tw`text-4xl text-green font-bold lg:mb-[24px] lg:mt-0  my-[12px]`}
`;

export const SubTitle = styled.div`
  ${tw`text-base text-white lg:mb-[118px] mb-[30px]`}
`;

export const PhoneNumber = styled.div``;

export const Infos = styled.div`
  ${tw`flex items-center text-white mb-[14px]`}
`;

export const IconWrap = styled.div`
  ${tw`flex justify-center items-center w-[40px] h-[40px] bg-gray rounded-[50%] mr-[16px]`}
`;

export const Icon = styled.figure`
  ${tw`my-auto w-[20px] h-[20px]`}
`;

export const Address = styled.div`
  ${tw`text-base`}
`;
