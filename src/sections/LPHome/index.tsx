"use client";

import React from "react";
import * as S from "./styles";
import { Button, HeaderContainer, Title } from "@/styles/globalStyles";
import InscriptionButton from "@/components/InscriptionButton";
const LPHome: React.FC = () => {
  return (
    <S.Section>
      <HeaderContainer>
        <nav className="hide-on-mobile">
          <img src="/images/logo_film-branco.png" alt="logo Filme Lab" />
          <a href="#">Home</a>
          <a href="#class-content">Conteúdo Da Aula</a>
          <a href="#para-quem">Para Quem É Essa Aula</a>
        </nav>
        <img
          className="hide-on-desktop"
          src="/images/logo_film-branco.png"
          alt="logo Filme Lab"
        />
      </HeaderContainer>
      <S.Container>
        <S.Card>
          <S.CardHeader className="poppins-bold">
            MASTERCLASS PARA CEOs
          </S.CardHeader>
          <Title>
            Quem não é visto,
            <br />
            <span>não é lembrado!</span>
          </Title>
        </S.Card>

        <S.ImageContainer>
          <img
            className="hide-on-desktop"
            src="/images/foto-ceos.png"
            alt="Foto de CEOs"
          />
        </S.ImageContainer>

        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          porttitor est ac risus ullamcorper eleifend. Proin in nibh molestie
          mauris dapibus molestie ut ut.
        </S.Description>

        <S.ButtonWrapper>
          <InscriptionButton />
        </S.ButtonWrapper>
      </S.Container>
    </S.Section>
  );
};

export default LPHome;
