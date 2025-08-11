'use client'
import React from 'react'
import { GridItem, NewCard, ParaQuemContainer } from './styles'
import { Title } from '@/styles/globalStyles'
import InscriptionButton from '@/components/InscriptionButton'
import { itemContent } from './itemContent'

const ParaQuem: React.FC = () => {
  return (
    <ParaQuemContainer id="para-quem">
      <Title className="alignedTitle">Para quem é esta MasterClass?</Title>

      <div className="cards-container">
        <NewCard>
          <h2 className="poppins-regular">CEOS que querem</h2>
          <p className="poppins-semibold">
            transformar presença digital em receita direta.
          </p>
        </NewCard>

        <NewCard>
          <h2 className="poppins-regular">Fundadores que </h2>
          <p className="poppins-semibold">
            buscam acelerar crescimento da startup.
          </p>
        </NewCard>

        <NewCard>
          <h2 className="poppins-regular">Executivos C-Level que desejam</h2>
          <p className="poppins-semibold">impulsionar resultados.</p>
        </NewCard>
      </div>

      <h3 className="poppins-semibold intermediate-title">
        Também é para você que deseja...
      </h3>

      <div className="grid">
        {itemContent.map((item, index) => (
          <GridItem key={index}>
            <div className="placeholder">
              <img src={item.image} alt={item.title} className="item-icon" />
            </div>
            <div className="content">
              <h3 className="item-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </GridItem>
        ))}
      </div>

      <InscriptionButton text="INSCREVA-SE E APROVEITE!" />
    </ParaQuemContainer>
  )
}

export default ParaQuem
