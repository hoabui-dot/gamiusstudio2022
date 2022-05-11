import Link from 'next/link';
import React from 'react';
import * as S from './FooterList.styled';

interface FooterListProps {
  data: {
    title: string;
    content: {
      label: string;
      url: string;
    }[];
  };
}

export const FooterList = (props: FooterListProps) => {
  const {
    data: {title, content},
  } = props;
  return (
    <S.FooterList>
      <S.ListTitle>{title}</S.ListTitle>
      {content.map((item, index) => (
        <Link href={item.url} key={index}>
          <S.ListItem>{item.label}</S.ListItem>
        </Link>
      ))}
    </S.FooterList>
  );
};
