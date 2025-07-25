"use client";

import React from "react";
import { Container, VistoCard, VistoSection } from "./styles";
import { Title } from "@/styles/globalStyles";
import itemContent from "./itemContent";

const QuemNaoEVisto: React.FC = () => {
  return (
    <VistoSection>
      <Container>
        <Title>Quem Não é Visto, Não é Lembrado</Title>
        {itemContent.map((item, index) => (
          <VistoCard key={index}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </VistoCard>
        ))}
      </Container>
    </VistoSection>
  );
};

export default QuemNaoEVisto;
