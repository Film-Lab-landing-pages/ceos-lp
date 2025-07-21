"use client";

import Image from "next/image";
import { Card, Title } from "@/styles/globalStyles";
import * as S from "./styles";

const solutions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tellus id massa pretium semper aliquet ac.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tellus id massa pretium semper aliquet ac.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tellus id massa pretium semper aliquet ac.",
];

const ASolucao = () => {
  return (
    <S.SolucaoSection>
      <S.FlexContainer>
        <Title>A Solução</Title>

        <S.SubtitleWrapper>
          <S.SubtitleMainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            tellus id massa pretium semper aliquet ac metus.
          </S.SubtitleMainText>
          <S.SubtitleSpan>
            In lacinia eros sed nulla dignissim, eu ultricies nisi lacinia.
          </S.SubtitleSpan>
        </S.SubtitleWrapper>

        <S.CardWrapper>
          <S.PositionedCard as={Card}>
            <S.CardContent>
              {solutions.map((text, index) => (
                <S.CardItem key={index}>
                  <S.CardItemText>{text}</S.CardItemText>
                  <S.CardItemIcon>
                    <Image
                      src="/images/estrela_amarela.svg"
                      alt="Estrela"
                      width={93}
                      height={104}
                    />
                  </S.CardItemIcon>
                </S.CardItem>
              ))}
            </S.CardContent>
          </S.PositionedCard>
        </S.CardWrapper>
      </S.FlexContainer>
    </S.SolucaoSection>
  );
};

export default ASolucao;
