/* eslint-disable @next/next/no-img-element */
'use client'

import { Card, Title } from '@/styles/globalStyles'
import * as S from './styles'

const solutions = [
  {
    number: '01',
    text: (
      <>
        <p>
          <strong>Direção de cena</strong> pra te destravar
        </p>
        <br className="hide-on-mobile" />
        <p>na frente das câmeras.</p>
      </>
    ),
  },
  {
    number: '02',
    text: (
      <>
        <p>
          Estratégia baseada em <strong>análise de dados.</strong>
        </p>
      </>
    ),
  },
  {
    number: '03',
    text: (
      <>
        <strong>Soluções 360</strong>
        <br />
        <p>sem dor de cabeça.</p>
      </>
    ),
  },
]

const ASolucao = () => {
  return (
    <S.SolucaoSection>
      <S.FlexContainer>
        <Title>A Solução</Title>

        <S.SubtitleWrapper>
          <S.SubtitleMainText>
            Se respondeu “não” pra qualquer item, relaxa.
          </S.SubtitleMainText>
          <S.SubtitleSpan>
            É por isso que criamos nossos planos de gestão com estratégia e
            intenção — pra fazer sua presença digital valer a pena.
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
  )
}

export default ASolucao
