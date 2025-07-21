"use client";

import React from "react";
import * as S from "./styles";
import { Button, Title } from "@/styles/globalStyles";
import InscriptionButton from "@/components/InscriptionButton";
import Header from "@/components/Header";

const LPHome: React.FC = () => {
  return (
    <S.Section>
      <Header />
      <S.Container>
        <S.Card>
          <S.CardContent>
            <S.CardHeader className="poppins-bold">
              MASTERCLASS PARA CEOs
            </S.CardHeader>
            <Title>
              Quem não é visto,
              <br />
              <span>não é lembrado!</span>
            </Title>
          </S.CardContent>
        </S.Card>

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
