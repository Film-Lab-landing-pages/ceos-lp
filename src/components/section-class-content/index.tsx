'use client'

import React from 'react'
import {
  Section,
  Title,
  Subtitle,
  Grid,
  LeftCard,
  CenterImage,
  RightCard,
  EnrollButton,
  Description,
  RightList,
  ListItem,
  Header,
} from './styles'

export default function SectionClassContent() {
  return (
    <Section>
      <Grid>
        <Header>
          <Title className="poppins-bold">Conteúdo Da Aula</Title>
          <Subtitle className="poppins-light">
            theme focused on creating seamless connections
          </Subtitle>
        </Header>

        <LeftCard>
          <h3 className="poppins-medium">MasterClass para CEOs</h3>
          <Description className="poppins-light">
            With a modern design and a focus on trust
            <br />
            and excellence, this theme empowers organizations
            <br />
            to overcome challenges.
          </Description>
        </LeftCard>

        <CenterImage>
          <img src="/images/ceo.png" alt="CEO com pilha de dinheiro" />
        </CenterImage>

        <RightCard>
          <h3 className="poppins-regular">DIGITAL TRANSFORMATION</h3>
          <RightList>
            <ListItem className="poppins-light">
              seize opportunities, and achieve long-term
              <br /> success in an ever.
            </ListItem>
            <ListItem>
              seize opportunities, and achieve long-term <br /> success in an
              ever.
            </ListItem>
          </RightList>
        </RightCard>

        <EnrollButton className="poppins-xbold">Inscrição</EnrollButton>
      </Grid>
    </Section>
  )
}
