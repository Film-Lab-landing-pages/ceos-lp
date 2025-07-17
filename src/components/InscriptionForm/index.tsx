import React from "react";
import { InscriptionContainer } from "./styles";

const InscriptionForm: React.FC = () => {
  return (
    <InscriptionContainer>
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" />
      </form>
    </InscriptionContainer>
  );
};
