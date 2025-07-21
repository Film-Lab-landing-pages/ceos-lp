"use client";

import { Card, Container, Title } from "@/styles/globalStyles";
import React from "react";
import { SairDessaSection, Subtitle } from "./styles";

const SairDessa: React.FC = () => {
  return (
    <SairDessaSection>
      <Container>
        <Title>O Que Você Precisa Para Sair Dessa?</Title>
        <Card className="flex-card">
          <div className="flex-item">
            <Subtitle>Lorem Ipsum</Subtitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              tellus id massa pretium semper aliquet ac metus. In lacinia eros
              sed nulla dignissim, eu ultricies nisi lacinia. Ut lobortis est
              sed tellus posuere cursus. Duis quis tortor pulvinar, efficitur
              nulla nec, cursus lorem. Aenean eget turpis ac eros vehicula
              blandit eget vehicula arcu. Vestibulum auctor nisi quis ante
              malesuada, sed convallis metus tincidunt.{" "}
            </p>
          </div>
          <div className="flex-item">
            <Subtitle>Lorem Ipsum</Subtitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              tellus id massa pretium semper aliquet ac metus. In lacinia eros
              sed nulla dignissim, eu ultricies nisi lacinia. Ut lobortis est
              sed tellus posuere cursus. Duis quis tortor pulvinar, efficitur
              nulla nec, cursus lorem. Aenean eget turpis ac eros vehicula
              blandit eget vehicula arcu. Vestibulum auctor nisi quis ante
              malesuada, sed convallis metus tincidunt.{" "}
            </p>
          </div>
        </Card>
      </Container>
    </SairDessaSection>
  );
};

export default SairDessa;
