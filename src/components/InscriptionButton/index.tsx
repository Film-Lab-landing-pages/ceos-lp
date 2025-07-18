"use client";

import React from "react";
import { useInscriptionStore } from "@/store/store";
import { Button } from "@/styles/globalStyles";

const InscriptionButton: React.FC = () => {
  const { showForm } = useInscriptionStore();
  return (
    <Button
      size="small"
      onClick={showForm}
      className="poppins-xbold class-content"
    >
      Inscrição
    </Button>
  );
};

export default InscriptionButton;
