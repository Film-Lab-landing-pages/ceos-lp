"use client";
import React from "react";
import { ParaQuemContainer } from "./styles";
import { Button, Card, Title } from "@/styles/globalStyles";
import InscriptionButton from "@/components/InscriptionButton";

const ParaQuem: React.FC = () => {
  return (
    <ParaQuemContainer id="para-quem">
      <Title className="alignedTitle">Para Quem É Esta Aula?</Title>
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
          <div className="content">
            <h3>Market Research</h3>
            <p>
              Provide in-depth insights into industry trends and customer
              behavior.
            </p>
          </div>
        </Card>
        <Card className="grid-item">
          <div className="placeholder"></div>
          <div className="content">
            <h3>Market Research</h3>
            <p>
              Provide in-depth insights into industry trends and customer
              behavior.
            </p>
          </div>
        </Card>
        <Card className="grid-item">
          <div className="placeholder"></div>
          <div className="content">
            <h3>Market Research</h3>
            <p>
              Provide in-depth insights into industry trends and customer
              behavior.
            </p>
          </div>
        </Card>
      </div>
      <InscriptionButton />
    </ParaQuemContainer>
  );
};

export default ParaQuem;
