"use client";

import React from "react";
import { InscriptionContainer } from "./styles";

const InscriptionForm: React.FC = () => {
  return (
    <InscriptionContainer>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Celular" />
        <button>Inscrição</button>
      </form>
      <div className="overlay"></div>
    </InscriptionContainer>
  );
};

export default InscriptionForm;
