import * as S from './NavItem.styled';
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  tab: {
    title: string;
    url: string;
    name?: string;
  };
  active: string;
}

export const NavItem = ({
  tab: { title, url, name },
  active,
}: NavItemProps) => {
  return (
    <S.NavItem>
      <Link href={url}>
        {name === 'contact' ? (
          <S.NavContact>
            {title}
            <S.FlashIcon>
              <Image
                src='/img/flash.png'
                alt='Gaming Logo'
                width='1'
                height='1'
                layout='responsive'
              />
            </S.FlashIcon>
          </S.NavContact>
        ) : (
          <S.NavUrl className={`${active === name && 'active'}`}>
            {title}
          </S.NavUrl>
        )}
      </Link>
    </S.NavItem>
  );
};
