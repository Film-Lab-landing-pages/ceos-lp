"use client";
import React from "react";
import { GridItem, ParaQuemContainer } from "./styles";
import { Button, Card, Title } from "@/styles/globalStyles";
import InscriptionButton from "@/components/InscriptionButton";
import { itemContent } from "./itemContent";

const ParaQuem: React.FC = () => {
  return (
    <ParaQuemContainer id="para-quem">
      <Title className="alignedTitle">Para Quem É Esta Aula?</Title>
      <Card className="explanation">
        Destinado a CEOs que querem{" "}
        <span>transformar presença digital em receita direta</span> através de
        conteúdo estratégico, fundadores que{" "}
        <span>buscam acelerar crescimento da startup </span> via marca pessoal
        gerando leads qualificados, e executivos C-Level que desejam{" "}
        <span>impulsionar resultados.</span>
      </Card>
      <div className="grid">
        {itemContent.map((item, index) => (
          <GridItem key={index}>
            <div className="placeholder">
              <img src={item.image} alt={item.title} className="item-icon" />
            </div>
            <div className="content">
              <h3 className="item-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </GridItem>
        ))}
      </div>
      <InscriptionButton />
    </ParaQuemContainer>
  );
};

export default ParaQuem;
