"use client";
import React from "react";
import { ParaQuemContainer } from "./styles";
import { Button, Card, Title } from "@/styles/globalStyles";

const ParaQuem: React.FC = () => {
  return (
    <ParaQuemContainer>
      <Title>Para Quem É Esta Aula?</Title>
      <Card className="explanation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
        tellus id massa pretium semper aliquet ac metus.{" "}
        <span>In lacinia eros sed nulla dignissim,</span> eu ultricies nisi
        lacinia. Ut lobortis est sed tellus posuere cursus. Duis quis tortor
        pulvinar, efficitur nulla nec, cursus lorem.{" "}
      </Card>
      <div className="grid">
        <Card className="grid-item">
          <div className="placeholder"></div>
          <h3>Market Research</h3>
          <p>
            Provide in-depth insights into industry trends and customer
            behavior.
          </p>
        </Card>
        <Card className="grid-item">
          <div className="placeholder"></div>
          <h3>Market Research</h3>
          <p>
            Provide in-depth insights into industry trends and customer
            behavior.
          </p>
        </Card>
        <Card className="grid-item">
          <div className="placeholder"></div>
          <h3>Market Research</h3>
          <p>
            Provide in-depth insights into industry trends and customer
            behavior.
          </p>
        </Card>
      </div>
      <Button size="small">Inscrição</Button>
    </ParaQuemContainer>
  );
};

export default ParaQuem;
