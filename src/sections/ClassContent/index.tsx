/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import {
  RightList,
  RightContainer,
  LeftContainer,
  CenterContainer,
  ClassSection,
  Container,
  Flex,
} from './styles'
import { Title, Card } from '@/styles/globalStyles'
import InscriptionButton from '@/components/InscriptionButton'

export default function SectionClassContent() {
  return (
    <ClassSection id="class-content">
      <Container>
        <Title className="poppins-bold">Uma aula feita para você!</Title>
        <Flex>
          <LeftContainer>
            <Card>
              <h3 className="poppins-medium">MasterClass para CEOs</h3>
              <ul>
                <li className="poppins-light">
                  Descubra qual persona combina com você.
                </li>
                <li className="poppins-light">
                  Posicione-se de forma natural e autêntica.
                </li>
                <li className="poppins-light">
                  Defina sua marca pessoal com precisão.
                </li>
              </ul>
            </Card>
          </LeftContainer>
          <CenterContainer>
            <img src="/images/ceo.png" alt="CEO com pilha de dinheiro" />
          </CenterContainer>
          <RightContainer>
            <h3 className="poppins-bold">Destrave na Frente das Câmeras!</h3>
            <Card>
              <RightList>
                <li>
                  <span className="poppins-bold">01</span>
                  <p className="poppins-light">Método exclusivo</p>
                </li>
                <li>
                  <span className="poppins-bold">02</span>
                  <p className="poppins-light">
                    Transforme nervosismo em presença magnética.
                  </p>
                </li>
                <li>
                  <span className="poppins-bold">03</span>
                  <p className="poppins-light">
                    A solução definitiva para comunicação impactante.
                  </p>
                </li>
              </RightList>
            </Card>
          </RightContainer>
        </Flex>
        <InscriptionButton text="Deixe de ser um CEO anônimo!" />
      </Container>
    </ClassSection>
  )
}
