"use client";
import React from "react";
import { FooterContainer } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="logo-and-copyright">
        <img src="./images/logo_film-footer.png" alt="logo Filme Lab" />

        <p className="copyright">
          © Copyright 2025 FilmeLab. Todos os direitos reservados.
        </p>
      </div>
      <p className="filmelab-website">www.filmelab.com.br</p>
    </FooterContainer>
  );
};

export default Footer;
