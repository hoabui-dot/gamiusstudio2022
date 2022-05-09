import React from "react";
import * as S from "./Header.styled";
import Image from "next/image";
import Link from "next/link";
import {NavItem} from "./components/NavItem/NavItem";

interface HeaderProps {}

const data = {
  navigation: [
    {title: "Home", url: "/"},
    {title: "Works", url: "/"},
    {title: "About Us", url: "/"},
    {title: "Contact", url: "/contact", class: "contact"},
  ],
};

export const Header = (props: HeaderProps) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderInner>
          <Link href="/">
            <S.HeaderLogo>
              <Image
                src="/img/LogoStudio.png"
                alt="Gaming Logo"
                width="93"
                height="32"
                layout="responsive"
              />
            </S.HeaderLogo>
          </Link>
          <S.HeaderNav>
            {data.navigation.map((item, index) => (
              <NavItem tab={item} key={index} />
            ))}
          </S.HeaderNav>
        </S.HeaderInner>
      </S.HeaderContainer>
    </S.Header>
  );
};
