# 🎬 CEOs Landing Page - FilmeLab

> Landing page profissional para CEOs desenvolvida com Next.js, TypeScript e Styled Components

![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-pink?style=flat-square&logo=styled-components)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Componentes](#componentes)
- [Seções](#seções)
- [Estado Global](#estado-global)
- [Estilos](#estilos)
- [Deploy](#deploy)

## 📖 Sobre o Projeto

Landing page desenvolvida para a **FilmeLab** com foco em CEOs e executivos. O projeto apresenta uma interface moderna e responsiva com múltiplas seções informativas e um sistema de inscrição integrado.

### ✨ Funcionalidades Principais

- 🎯 Landing page otimizada para conversão
- 📱 Design responsivo (desktop, tablet, mobile)
- 🎨 Interface moderna com Styled Components
- 📝 Formulário de inscrição com validação
- 🚀 Performance otimizada com Next.js
- 🎭 Animações e transições suaves
- 📊 Gerenciamento de estado com Zustand

## 🛠 Tecnologias

### Frontend

- **Next.js 15.4.1** - Framework React para produção
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Styled Components 6.1.19** - CSS-in-JS para estilização

### Estado e Utilidades

- **Zustand 5.0.6** - Gerenciamento de estado leve
- **Next/Image** - Otimização automática de imagens
- **ESLint** - Linter para qualidade de código

## 📁 Estrutura do Projeto

```
ceos-lp/
├── public/
│   └── images/          # Imagens e assets estáticos
├── src/
│   ├── app/            # App Router (Next.js 13+)
│   │   ├── layout.js   # Layout principal
│   │   ├── page.jsx    # Página inicial
│   │   └── ceo-masterclass/
│   │       └── page.tsx # Página da masterclass
│   ├── components/     # Componentes reutilizáveis
│   │   ├── Footer/     # Rodapé
│   │   ├── Header/     # Cabeçalho
│   │   ├── InscriptionButton/ # Botão de inscrição
│   │   └── InscriptionForm/   # Formulário de inscrição
│   ├── sections/      # Seções da landing page
│   │   ├── LPHome/    # Seção inicial
│   │   ├── ParaQuem/  # "Para quem é esta aula"
│   │   ├── ASolucao/  # "A Solução"
│   │   ├── ClassContent/ # Conteúdo da aula
│   │   ├── QuemNaoEVisto/ # "Quem não é visto"
│   │   └── SairDessa/ # "Sair dessa"
│   ├── store/         # Gerenciamento de estado
│   │   └── store.ts   # Store Zustand
│   └── styles/        # Estilos globais
├── next.config.mjs    # Configuração do Next.js
└── package.json       # Dependências e scripts
```

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/Film-Lab-landing-pages/ceos-lp.git
cd ceos-lp
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute em modo de desenvolvimento**

```bash
npm run dev
```

4. **Acesse no navegador**

```
http://localhost:3000
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Build de produção + export estático
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Executa ESLint
```

## 🧩 Componentes

### Header

**Localização:** `src/components/Header/`

- Navegação principal
- Logo da FilmeLab
- Menu responsivo

### Footer

**Localização:** `src/components/Footer/`

- Informações de copyright
- Logo e website da empresa

### InscriptionForm

**Localização:** `src/components/InscriptionForm/`

- Formulário modal de inscrição
- Validação de campos
- Integração com Zustand
- Transições suaves

### InscriptionButton

**Localização:** `src/components/InscriptionButton/`

- Botão para abrir modal de inscrição
- Integrado com store global

## 🎯 Seções

### 🏠 LPHome

Seção inicial com hero section e proposta de valor principal

### 👥 ParaQuem

Seção explicativa sobre público-alvo e benefícios para CEOs

### 💡 ASolucao

Apresenta problemas identificados e soluções propostas

### 📚 ClassContent

Detalhes da masterclass com conteúdo programático

### 👤 QuemNaoEVisto / SairDessa

Seções de conversão com problemas do mercado e urgência

## 🗄 Estado Global

### Zustand Store

**Localização:** `src/store/store.ts`

```typescript
interface InscriptionState {
  isFormVisible: boolean; // Controla visibilidade do modal
  isActive: boolean; // Controla animações
  showForm: () => void; // Mostra formulário
  hideForm: () => void; // Esconde formulário
  toggleForm: () => void; // Alterna estado
}
```

## 🎨 Estilos

### Sistema de Design

**Cores principais:**

```css
--color-white: #ffffff
--color-yellow: #ffc802
--color-black: #000000
```

**Tipografia:**

- Fonte principal: **Poppins**
- Weights: 300, 400, 500, 700, 800

### Responsividade

Breakpoints:

- Mobile: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `min-width: 1024px`

## 🚀 Deploy

O projeto está configurado para **export estático**:

```bash
npm run build
```

Gera arquivos estáticos na pasta `out/` prontos para deploy em:

- ✅ Vercel (recomendado)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Qualquer servidor estático

## 📄 Licença

Este projeto é propriedade da **FilmeLab**.

## 📞 Suporte

- 🌐 Website: [www.filmelab.com.br](https://www.filmelab.com.br)

---

**Desenvolvido com ❤️ pela equipe FilmeLab**
