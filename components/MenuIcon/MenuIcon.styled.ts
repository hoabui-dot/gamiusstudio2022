import styled from 'styled-components';
import tw from 'twin.macro';

export const MenuIcon = styled.div`
  ${tw`inline-block cursor-pointer relative z-[9999999999]`}
  &.change {
    .bar1 {
      ${tw`transform-cpu -rotate-45 translate-y-[5px] translate-x-[-0px]`}
    }
    .bar2 {
      ${tw`opacity-0`}
    }
    .bar3 {
      ${tw`transform-cpu rotate-45 translate-y-[-5px] translate-x-[-0px]`}
    }
  }
`;

export const IconBar = styled.div`
  ${tw`w-[18px] h-[2px] rounded bg-white my-[3px] duration-[250ms]`}
`;
