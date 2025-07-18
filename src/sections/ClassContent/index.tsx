"use client";

import React from "react";
import {
  Subtitle,
  RightList,
  Header,
  RightContainer,
  LeftContainer,
  CenterContainer,
  ClassSection,
} from "./styles";
import { Title, Grid, Card } from "@/styles/globalStyles";
import InscriptionButton from "@/components/InscriptionButton";

export default function SectionClassContent() {
  return (
    <ClassSection>
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
          <InscriptionButton />
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
    </ClassSection>
  );
}
