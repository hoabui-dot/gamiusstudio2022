import styled from 'styled-components';
import tw from 'twin.macro';

export const ApproachWrap = styled.div`
    ${tw`pb-[80px] pt-[60px]`}
    z-index: 2;
    background-size: auto auto;
    background-color: rgba(7, 9, 17, 1);
    background-image: repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(122, 123, 124, 0.15) 15px, rgba(122, 123, 124, 0.15) 16px ),repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(122, 123, 124, 0.14901960784313725) 15px, rgba(122, 123, 124, 0.14901960784313725) 16px );
`
export const Grid = styled.div`
    ${tw`container grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-[74px]`}
`
export const Item = styled.div`
    ${tw`text-left border-b-[2px]`}
    
`

export const ItemTitle = styled.div`
    ${tw`text-[#C8FC03] mb-[24px] text-2xl font-bold w-[130px]`}
`
export const ItemSubTitle = styled.div`
    ${tw`text-white mb-[24px] text-base font-normal`}
`