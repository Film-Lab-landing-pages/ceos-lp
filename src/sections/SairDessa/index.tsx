"use client";

import { Card, Container, Title } from "@/styles/globalStyles";
import React from "react";
import { CheckItem, SairDessaSection, Subtitle } from "./styles";
import { questions } from "./content";

const SairDessa: React.FC = () => {
  return (
    <SairDessaSection>
      <Title>
        Checklist de quem <br className="hide-on-desktop" /> quer virar o jogo
      </Title>
      <Container className="container">
        <Card className="flex-card">
          {questions.map((question, index) => (
            <CheckItem key={index + 70}>
              <img key={index + 50} src="/images/checkbox.png" alt="estrela" />
              <div key={index} className="flex-item">
                <p>{question}</p>
              </div>
            </CheckItem>
          ))}
        </Card>
        <img
          className="hide-on-desktop arrow"
          src="/images/seta.png"
          alt="seta lucros"
        />
      </Container>
    </SairDessaSection>
  );
};

export default SairDessa;
