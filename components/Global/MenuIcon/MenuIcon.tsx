import * as S from './MenuIcon.styled';

interface MenuIconProps {
  change: boolean;
}

export const MenuIcon = (props: MenuIconProps) => {
  const { change } = props;

  return (
    <S.MenuIcon className={change ? 'change' : ''}>
      <S.IconBar className='bar1' />
      <S.IconBar className='bar2' />
      <S.IconBar className='bar3' />
    </S.MenuIcon>
  );
};
