"use client";

import { Card, Title } from "@/styles/globalStyles";
import * as S from "./styles";

const Pacotes = () => {
  return (
    <S.PacotesSection id="bundles">
      <S.FlexContainer>
        <Title>Pacotes</Title>

        <S.SubtitleWrapper>
          <S.SubtitleMainText>
            Pronto pra colocar tudo isso em prática com consistência?
          </S.SubtitleMainText>
          <S.SubtitleSpan>Escolha o pacote ideal pra sua marca.</S.SubtitleSpan>
        </S.SubtitleWrapper>

        <S.PacotesGrid>
          <S.Pacote>
            <S.Icon src="/images/terra.png" alt="Ícone Terra" />
            <S.PacoteTitle className="poppins-bold">TERRA</S.PacoteTitle>
            <S.PacotesCard>
              <S.CardHeader className="poppins-bold">Inclui:</S.CardHeader>

              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>8 reels
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>4 posts estáticos
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Diagnóstico da rede social
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Estúdio, roteirização, produção/
                gravação, direção e edição
              </S.CardItem>
              <S.CardItemInativo className="poppins-regular">
                <span className="cross">✘</span>Gestão de redes sociais
              </S.CardItemInativo>
            </S.PacotesCard>
          </S.Pacote>

          <S.Pacote>
            <S.Icon src="/images/marte.png" alt="Ícone Marte" />
            <S.PacoteTitle className="poppins-bold">MARTE</S.PacoteTitle>
            <S.PacotesCard>
              <S.CardHeader className="poppins-bold">Inclui:</S.CardHeader>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>12 reels
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>4 carrosseis
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>2 posts estáticos
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Relatório mensal
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Diagnóstico da rede social
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Estúdio, roteirização, produção/
                gravação, direção e edição
              </S.CardItem>
              <S.CardItemInativo className="poppins-regular">
                <span className="cross">✘</span>Gestão de redes sociais
              </S.CardItemInativo>
            </S.PacotesCard>
          </S.Pacote>

          <S.Pacote>
            <S.Icon src="/images/jupiter.png" alt="Ícone Júpiter" />
            <S.PacoteTitle className="recomepoppins-bold">
              JÚPITER
            </S.PacoteTitle>
            <S.PacotesCard className="recomendado">
              <S.CardHeader className="poppins-bold">Inclui:</S.CardHeader>

              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>12 reels
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>6 carrosseis
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Relatório mensal
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>
                <p>
                  Estúdio, roteirização, produção/ gravação, direção e edição
                </p>
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>
                <p className="bold-and-color">Gestão de redes sociais</p>
              </S.CardItem>
              <S.Selo className="poppins-bold">RECOMENDADO!</S.Selo>
            </S.PacotesCard>
          </S.Pacote>
        </S.PacotesGrid>
        <S.WhatsappButton href="https://wa.me/5511999999999" target="_blank">
          <img src="/images/whatsapp-icon.png" alt="WhatsApp Icon" />
          <p>Fale agora com nossos consultores!</p>
        </S.WhatsappButton>
      </S.FlexContainer>
    </S.PacotesSection>
  );
};

export default Pacotes;
