"use client";

import { Card, Container, Title } from "@/styles/globalStyles";
import React from "react";
import { SairDessaSection, Subtitle } from "./styles";
import { questions } from "./content";

const SairDessa: React.FC = () => {
  return (
    <SairDessaSection>
      <Container>
        <Title>O Que Você Precisa Para Sair Dessa?</Title>
        <Card className="flex-card">
          {questions.map((question, index) => (
            <div key={index} className="flex-item">
              <img key={index + 50} src="./images/star.png" alt="estrela" />

              <p>{question}</p>
            </div>
          ))}
        </Card>
      </Container>
    </SairDessaSection>
  );
};

export default SairDessa;
