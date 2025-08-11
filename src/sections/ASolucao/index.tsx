/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, Title } from "@/styles/globalStyles";
import * as S from "./styles";

const solutions = [
  {
    number: "01",
    text: (
      <p>
        <strong>Direção de cena</strong> pra te destravar na frente das câmeras
        e aprender a se posicionar com confiança, clareza e impacto.
      </p>
    ),
  },
  {
    number: "02",
    text: (
      <p>
        <strong>Estratégia digital</strong> para conquistar autoridade no
        ambiente online
      </p>
    ),
  },
  {
    number: "03",
    text: (
      <p>
        <strong>Soluções 360</strong> da câmera à captação — sem complicação,
        com resultado.
      </p>
    ),
  },
];

const ASolucao = () => {
  return (
    <S.SolucaoSection id="solution">
      <S.FlexContainer>
        <Title>Temos a solução para você!</Title>

        <S.SubtitleWrapper>
          <S.SubtitleMainText>
            É por isso que criamos nossos planos de gestão com estratégia e
            intenção —
          </S.SubtitleMainText>
          <S.SubtitleSpan>
            pra fazer sua presença digital valer a pena.
          </S.SubtitleSpan>
        </S.SubtitleWrapper>

        <S.CardWrapper>
          <S.PositionedCard as={Card}>
            <S.CardContent>
              {solutions.map((item, index) => (
                <S.SolutionRow key={index}>
                  <S.SolutionText>{item.text}</S.SolutionText>
                  <S.SolutionNumber>{item.number}</S.SolutionNumber>
                </S.SolutionRow>
              ))}
            </S.CardContent>
          </S.PositionedCard>
        </S.CardWrapper>
        <img
          className="hide-on-desktop coin"
          src="/images/moeda.png"
          alt="moeda"
        />
      </S.FlexContainer>
    </S.SolucaoSection>
  );
};

export default ASolucao;
