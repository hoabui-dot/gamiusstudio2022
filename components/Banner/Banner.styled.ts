import styled from 'styled-components';
import tw from 'twin.macro';

export const Banner = styled.div`
    ${tw`relative min-w-full xl:h-[623px] lg:h-[550px] md:h-[280px] sm:h-[265px] h-[140px]`}
`

export const Background = styled.div`
    ${tw`absolute w-full xl:h-[632px] lg:h-[550px] md:h-[280px] sm:h-[265px] h-[140px] 
    overflow-hidden`};
`
export const BackgroundDark = styled.div`
    ${tw`absolute top-0 left-0 z-[1] w-full h-full`} background-color: rgba(0,0,0,0.9)
`

export const BannerItem = styled.div`
    ${tw`flex h-full justify-center items-center`}
`

export const BannerTitle = styled.div`
    ${tw`flex text-[15px] xl:text-5xl lg:text-4xl sm:text-2xl text-base sm:mr-[10px] mr-[5px]
    font-bold xl:mr-[35px] md:mr-[30px] sm:mt-[-35px]`}
`
export const BannerContent = styled.div`
    ${tw`relative z-10 xl:w-[520px] lg:w-[360px] md:w-[350px] sm:w-[300px] w-[150px] xl:mr-[40px] 
    md:mr-[30px] sm:mr-[15px] mr-[2px] text-white tracking-tight`}
`

export const TitleGreen = styled.div`
    ${tw`uppercase text-[#C8FC03] sm:ml-[12px] ml-[5px]`}
`

export const TitleWhite = styled.div`
    ${tw`text-white capitalize `}
`

export const BannerImage = styled.div`
    ${tw`relative xl:w-[629px] mb-auto xl:mt-[60px] md:mt-[30px] sm:mt-[20px] mt-[15px] lg:w-[550px] lg:h-[280px] 
     sm:w-[280px] w-[140px] z-10`}
`


export const BannerSubTitle = styled.p`
    ${tw`text-[9px] xl:text-2xl sm:text-sm md:text-base md:leading-4 sm:leading-3 font-normal 
    xl:mt-[50px] lg:mt-[25px] md:mt-[15px] mt-[6px] leading-[11px]`}
`

export const GreenColor = styled.span`
    ${tw`text-[#C8FC03]`}
`

export const BannerIcon = styled.div`
    ${tw`xl:w-[110px] xl:bottom-[-13%] xl:left-[-17.5%]
    lg:w-[70px] lg:bottom-[-16%] lg:left-[-16%] 
    md:bottom-[-16%] md:w-[50px] md:left-[-12%]
    sm:left-[-12%] sm:bottom-[-25%]
    absolute w-[40px] left-[-20%] bottom-[-8px]`}
`

export const BannerStatus = styled.ul`
    ${tw`absolute flex xl:top-[38%] lg:top-[22%] md:top-[-4%] sm:top-[-30%] top-[22px] 
    right-0 z-[70]`}
`

export const Sticked = styled.li`
    ${tw`relative lg:w-[17.76px] sm:w-[10px] w-[9px] md:w-[14px] h-[23px] z-[90]`}
`

export const StickedLight = styled.div`
${tw`mt-[-10px] lg:w-[17.76px] sm:w-[10px] w-[10px] lg:mt-[-17.5px] lg:ml-[-0.5px] md:mt-[-14px] sm:mt-[-10px] md:w-[14px] hidden`}

&.active {
    ${tw`block`}
}
`

export const Linear = styled.div`
    ${tw`absolute bottom-0 w-full h-[60px] z-[100]`}
    background: linear-gradient(180deg, rgba(7, 9, 17, 0) 0%, #070911 100%);
`