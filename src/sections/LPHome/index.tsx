/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as S from './styles'
import { HeaderContainer, Title } from '@/styles/globalStyles'
import InscriptionButton from '@/components/InscriptionButton'
const LPHome: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true, // Anima apenas uma vez
      mirror: false,
    })
  }, [])
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
      <S.Container data-aos="fade-right">
        <S.Card>
          <S.CardHeader className="poppins-bold">
            Você entre os maiores do mercado!
          </S.CardHeader>
          <Title>
            Autoridade Digital
            <br />
            <span>para CEOs</span>
          </Title>
        </S.Card>

        <S.ImageContainer className="hide-on-desktop">
          <img src="/images/foto-ceos.png" alt="Foto de CEOs" />
        </S.ImageContainer>

        <S.Description>
          <b>
            Aprenda a começar a dominar sua comunicação e posicionamento{' '}
            <span className="poppins-light">
              - com técnicas de oratória, marketing e branding pessoal voltadas
              para líderes.
            </span>
          </b>
        </S.Description>

        <S.ButtonWrapper>
          <InscriptionButton text="Se destaque no digital!" />
        </S.ButtonWrapper>

        <S.InfoBox>
          <b className="poppins-bold main-text">
            O posicionamento digital virou a principal alavanca de crescimento
            para líderes visionários.
          </b>
          <span className="poppins-light sub-text">
            Executivos estratégicos online geram mais oportunidades e
            multiplicam o valor de suas empresas.
          </span>
        </S.InfoBox>
      </S.Container>
    </S.Section>
  )
}

export default LPHome
