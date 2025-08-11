"use client";

import { Card, Container, Title } from "@/styles/globalStyles";
import React from "react";
import { CheckItem, ChecklistSection, Subtitle } from "./styles";
import { questions } from "./content";

const SairDessa: React.FC = () => {
  return (
    <ChecklistSection>
      <Title>Você está pronto para virar esse jogo?</Title>
      <Container className="container">
        <Card className="flex-card">
          {questions.map((question, index) => (
            <CheckItem key={index + 70}>
              <img
                key={index + 50}
                src="/images/rectangle.png"
                alt="checkbox"
              />

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
    </ChecklistSection>
  );
};

export default SairDessa;
