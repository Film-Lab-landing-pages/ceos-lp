"use client";
import React from "react";
import { HeaderContainer } from "./styles";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src="./images/logo_film-branco.png" alt="logo Filme Lab" />
        <a href="#">Home</a>
        <a href="#">Conteúdo Da Aula</a>
        <a href="#">Para Quem É Essa Aula</a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
