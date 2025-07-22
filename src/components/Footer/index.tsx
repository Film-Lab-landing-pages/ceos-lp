"use client";

import React from "react";
import Image from "next/image";
import { FooterContainer } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="logo-and-copyright">
        <Image
          src="/images/logo_film-footer.png"
          alt="logo Filme Lab"
          width={150}
          height={50}
        />
        <p className="copyright">
          © Copyright 2025 FilmeLab. <br className="hide-on-desktop" /> Todos os
          direitos reservados.
        </p>
      </div>
      <p className="filmelab-website">www.filmelab.com.br</p>
    </FooterContainer>
  );
};

export default Footer;
