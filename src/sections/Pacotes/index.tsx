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
            <S.PacoteTitle className="poppins-bold">TERRA</S.PacoteTitle>
            <Card>
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
            </Card>
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

          <S.Pacote className="recomendado">
            <S.Icon src="/images/jupiter.png" alt="Ícone Júpiter" />
            <S.PacoteTitle className="poppins-bold">JÚPITER</S.PacoteTitle>
            <Card>
              <S.CardHeader className="poppins-bold">Inclui:</S.CardHeader>

              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>8 reels
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>6 carrosseis
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Relatório mensal
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Gestão de redes sociais
              </S.CardItem>
              <S.CardItem className="poppins-regular">
                <span className="check">✔</span>Estúdio, roteirização, produção/
                gravação, direção e edição
              </S.CardItem>
              <S.Selo className="poppins-bold">RECOMENDADO!</S.Selo>
            </Card>
          </S.Pacote>
        </S.PacotesGrid>
      </S.FlexContainer>
    </S.PacotesSection>
  )
}

export default Pacotes
