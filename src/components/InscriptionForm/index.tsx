"use client";

import React, { use } from "react";
import { CloseButton, InscriptionContainer } from "./styles";
import { useInscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";

const InscriptionForm: React.FC = () => {
  const { isFormVisible, isActive, hideForm } = useInscriptionStore();
  const router = useRouter();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/ceo-masterclass");
    hideForm();
  };

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
            <button type="submit" onClick={handleFormSubmit}>
              Inscrição
            </button>
          </form>
          <div onClick={hideForm} className="overlay"></div>
        </InscriptionContainer>
      )}
    </>
  );
};

export default InscriptionForm;
