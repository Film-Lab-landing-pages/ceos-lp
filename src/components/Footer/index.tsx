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
      <a
        className="filmelab-website"
        href="https://www.filmelab.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.filmelab.com.br
      </a>
    </FooterContainer>
  );
};

export default Footer;
