/* eslint-disable @next/next/no-img-element */
'use client'

import { Title, Container, HeaderContainer } from '@/styles/globalStyles'
import * as S from './styles'

const Apresentacao = () => {
  return (
    <S.ApresentacaoSection>
      <HeaderContainer>
        <nav className="hide-on-mobile">
          <img src="/images/logo_film-branco.png" alt="logo Filme Lab" />
          <a href="#">Home</a>
          <a href="#">Solução</a>
          <a href="#">Pacotes</a>
        </nav>
        <img
          className="hide-on-desktop"
          src="/images/logo_film-branco.png"
          alt="logo Filme Lab"
        />
      </HeaderContainer>
      <S.ApresentacaoContainerWrapper>
        <S.ApresentacaoTitle className="poppins-bold">
          MasterClass Para CEOs
        </S.ApresentacaoTitle>

        <S.ApresentacaoContainer></S.ApresentacaoContainer>
        <S.ApresentacaoText className="poppins-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.ApresentacaoText>
      </S.ApresentacaoContainerWrapper>
    </S.ApresentacaoSection>
  )
}

export default Apresentacao
