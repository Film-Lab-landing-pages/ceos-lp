"use client";

import React from "react";
import {
  Section,
  Subtitle,
  EnrollButton,
  RightList,
  Header,
  RightContainer,
  LeftContainer,
  CenterContainer,
} from "./styles";
import { Title, Grid, Card } from "@/styles/globalStyles";

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

        <LeftContainer>
          <Card>
            <h3 className="poppins-medium">MasterClass para CEOs</h3>
            <p className="poppins-light">
              With a modern design and a focus on trust and excellence, this
              theme empowers organizations to overcome challenges.
            </p>
          </Card>
        </LeftContainer>

        <CenterContainer>
          <img src="/images/ceo.png" alt="CEO com pilha de dinheiro" />
          <EnrollButton size="small" className="poppins-xbold class-content">
            Inscrição
          </EnrollButton>
        </CenterContainer>

        <RightContainer>
          <h3 className="poppins-regular">DIGITAL TRANSFORMATION</h3>
          <Card>
            <RightList>
              <li>
                seize opportunities, and achieve long-term success in an ever.
              </li>
              <li>
                seize opportunities, and achieve long-term success in an ever.
              </li>
            </RightList>
          </Card>
        </RightContainer>
      </Grid>
    </Section>
  );
}
