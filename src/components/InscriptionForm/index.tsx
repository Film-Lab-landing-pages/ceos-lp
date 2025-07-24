"use client";

import React from "react";
import { CloseButton, InscriptionContainer } from "./styles";
import { useInscriptionStore } from "@/store/store";

const InscriptionForm: React.FC = () => {
  const { isFormVisible, isActive, hideForm } = useInscriptionStore();
  return (
    <>
      {isFormVisible && (
        <InscriptionContainer
          id="inscription-form"
          className={isActive ? "active" : ""}
        >
          <form>
            <CloseButton onClick={hideForm} className="close-button">
              ×
            </CloseButton>
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
