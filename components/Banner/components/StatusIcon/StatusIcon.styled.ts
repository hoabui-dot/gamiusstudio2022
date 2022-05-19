import styled from 'styled-components';
import tw from 'twin.macro';

export const StatusIcon = styled.li`
  ${tw`relative w-[17.76px] z-[90]`}
`;

export const StatusIconLight = styled.div<{ activeIconLight: boolean }>`
  ${tw`absolute top-0 left-0 w-[17.76px] hidden`}
  ${({ activeIconLight }) => {
    return activeIconLight ? tw`block` : '';
  }}
  &.active {
    ${tw`block`}
  }
`;
