"use client";

import React from "react";
import { Container, VistoCard, VistoSection } from "./styles";
import { Title } from "@/styles/globalStyles";

const QuemNaoEVisto: React.FC = () => {
  return (
    <VistoSection>
      <Container>
        <Title>Quem Não é Visto, Não é Lembrado</Title>
        <VistoCard>
          <img src="/images/star.png" alt="estrela" />
          <div>
            <h3>Market Research</h3>
            <p>
              Provide in-depth insights into industry trends and customer
              behavior. Provide in-depth insights into industry trends and
              customer behavior.
            </p>
          </div>
        </VistoCard>
        <VistoCard>
          <img src="/images/star.png" alt="estrela" />
          <div>
            <h3>Market Research</h3>
            <p>
              Provide in-depth insights into industry trends and customer
              behavior. Provide in-depth insights into industry trends and
              customer behavior.
            </p>
          </div>
        </VistoCard>
        <VistoCard>
          <img src="/images/star.png" alt="estrela" />
          <div>
            <h3>Market Research</h3>
            <p>
              Provide in-depth insights into industry trends and customer
              behavior. Provide in-depth insights into industry trends and
              customer behavior.
            </p>
          </div>
        </VistoCard>
      </Container>
    </VistoSection>
  );
};

export default QuemNaoEVisto;
