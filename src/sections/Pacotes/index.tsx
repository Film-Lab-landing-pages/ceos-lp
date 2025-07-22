'use client'

import { Card, Title } from '@/styles/globalStyles'
import * as S from './styles'

const Pacotes = () => {
  return (
    <S.PacotesSection>
      <S.FlexContainer>
        <Title>Pacotes</Title>

        <S.SubtitleWrapper>
          <S.SubtitleMainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            tellus id massa pretium semper aliquet ac metus.
          </S.SubtitleMainText>
          <S.SubtitleSpan>
            In lacinia eros sed nulla dignissim, eu ultricies nisi lacinia.
          </S.SubtitleSpan>
        </S.SubtitleWrapper>

        <S.PacotesGrid>
          <S.Pacote>
            <S.Icon src="/images/terra.png" alt="Ícone Terra" />
            <S.PacoteTitle>TERRA</S.PacoteTitle>
            <Card>
              <S.CardItem>✔ 8 reels</S.CardItem>
              <S.CardItem>✔ 4 posts estáticos</S.CardItem>
              <S.CardItem>✔ Diagnóstico da rede social</S.CardItem>
              <S.CardItem>
                ✔ Estúdio, roteirização, produção/ gravação, direção e edição
              </S.CardItem>
              <S.CardItemInativo>✘ Gestão de redes sociais</S.CardItemInativo>
            </Card>
          </S.Pacote>
          <S.Pacote>
            <S.Icon src="/images/marte.png" alt="Ícone Marte" />
            <S.PacoteTitle>MARTE</S.PacoteTitle>
            <Card>
              <S.CardItem>✔ 12 reels</S.CardItem>
              <S.CardItem>✔ 4 carrosseis</S.CardItem>
              <S.CardItem>✔ 2 posts estáticos</S.CardItem>
              <S.CardItem>✔ Relatório mensal</S.CardItem>
              <S.CardItem>✔ Diagnóstico da rede social</S.CardItem>
              <S.CardItem>
                ✔ Estúdio, roteirização, produção/ gravação, direção e edição
              </S.CardItem>
              <S.CardItemInativo>✘ Gestão de redes sociais</S.CardItemInativo>
            </Card>
          </S.Pacote>
          <S.Pacote className="recomendado">
            <S.Icon src="/images/jupiter.png" alt="Ícone Júpiter" />
            <S.PacoteTitle>JÚPITER</S.PacoteTitle>
            <Card>
              <S.CardItem>✔ 8 reels</S.CardItem>
              <S.CardItem>✔ 6 carrosseis</S.CardItem>
              <S.CardItem>✔ Relatório mensal</S.CardItem>
              <S.CardItem>✔ Gestão de redes sociais</S.CardItem>
              <S.CardItem>
                ✔ Estúdio, roteirização, produção/ gravação, direção e edição
              </S.CardItem>
              <S.Selo>RECOMENDADO!</S.Selo>
            </Card>
          </S.Pacote>
        </S.PacotesGrid>
      </S.FlexContainer>
    </S.PacotesSection>
  )
}

export default Pacotes
