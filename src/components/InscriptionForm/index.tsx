"use client";

import React from "react";
import { InscriptionContainer } from "./styles";
import { useInscriptionStore } from "@/store/store";

const InscriptionForm: React.FC = () => {
  const { isFormVisible, hideForm } = useInscriptionStore();
  return (
    <>
      {isFormVisible && (
        <InscriptionContainer>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Celular" />
            <button>Inscrição</button>
          </form>
          <div onClick={hideForm} className="overlay"></div>
        </InscriptionContainer>
      )}
    </>
  );
};

export default InscriptionForm;
