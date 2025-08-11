'use client'

import React from 'react'
import {
  CardContainer,
  Container,
  Subtitle,
  VistoCard,
  VistoSection,
} from './styles'
import { Title } from '@/styles/globalStyles'
import itemContent from './itemContent'

const QuemNaoEVisto: React.FC = () => {
  return (
    <VistoSection>
      <Container>
        <Title>
          Quem não é visto, <br /> não é lembrado!
        </Title>
        <Subtitle>
          3 pontos que acabam com o seu posicionamento digital:
        </Subtitle>
        <CardContainer>
          {itemContent.map((item, index) => (
            <VistoCard key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </VistoCard>
          ))}
        </CardContainer>
      </Container>
    </VistoSection>
  )
}

export default QuemNaoEVisto
