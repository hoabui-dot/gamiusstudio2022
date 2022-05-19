import React from 'react';
import Image from 'next/image';
import * as S from './Contact.styled';
import * as G from '../../styles/global.styled';
import { ContactForm } from './components/ContactForm/ContactForm';

export const ContactPage = () => {
  return (
    <S.Contact>
      <S.Background>
        <Image
          src='/img/ContactBg.png'
          layout='fill'
          objectFit='cover'
          alt='Contact Background'
        />
      </S.Background>
      <G.Container>
        <S.ContentWrap>
          <S.Content>
            <S.Title>Get in touch</S.Title>
            <S.SubTitle>
              We always welcome all challenges and treat your needs with a
              maximum of responsiveness. Feel free to get in touch with us and
              talk about you.
            </S.SubTitle>
            <S.Infos>
              <S.IconWrap>
                <S.Icon>
                  <Image
                    src='/img/ContactCall.png'
                    layout='responsive'
                    width={1}
                    height={1}
                    alt='Phone Icon'
                  />
                </S.Icon>
              </S.IconWrap>
              <S.Address>123 456 789</S.Address>
            </S.Infos>
            <S.Infos>
              <S.IconWrap>
                <S.Icon>
                  <Image
                    src='/img/ContactMail.png'
                    layout='responsive'
                    width={1}
                    height={0.75}
                    alt='Email Icon'
                  />
                </S.Icon>
              </S.IconWrap>
              <S.Address>gamiusstudio@gmail.com</S.Address>
            </S.Infos>
          </S.Content>
          <S.List>
            <ContactForm />
          </S.List>
        </S.ContentWrap>
      </G.Container>
    </S.Contact>
  );
};
