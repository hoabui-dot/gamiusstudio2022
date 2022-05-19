import * as S from './StatusIcon.styled';
import Image from 'next/image';

interface StatusIconProps {
  active: boolean;
}

export const StatusIcon = ({ active }: StatusIconProps) => {
  return (
    <S.StatusIcon>
      <Image
        src='/img/Ticket.png'
        layout='responsive'
        width={1}
        height={1}
        alt='Ticket Icon'
      />
      <S.StatusIconLight activeIconLight={active}>
        <Image
          src='/img/TicketLight.png'
          layout='responsive'
          width={1}
          height={1}
          alt='Ticket Icon'
        />
      </S.StatusIconLight>
    </S.StatusIcon>
  );
};
