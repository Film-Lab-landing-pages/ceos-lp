import styled from "styled-components";
import { Section, Container } from "@/styles/globalStyles";

export const ApresentacaoSection = styled(Section)`
  margin: 5rem 0;
  background: url("/images/bg_apresentacao.png") center center no-repeat;
  background-size: cover;
  .hide-on-desktop {
    display: none;
  }

  @media (max-width: 480px) {
    .hide-on-desktop {
      display: block;
    }
    .hide-on-mobile {
      display: none;
    }
  }
`;
export const ApresentacaoTitle = styled.h1`
  color: var(--color-yellow);
  font-size: 5.3rem;
  line-height: 114px;
`;

export const ApresentacaoContainerWrapper = styled(Container)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 66%;
`;

export const ApresentacaoContainer = styled.div`
  width: 66%;
  aspect-ratio: 3 / 2;
  background-image: url("https://placehold.co/600x400/D9D9D9/FFF?text=Placeholder");
  background-size: cover;
  background-position: center;
  margin: 2rem 0;
`;

export const ApresentacaoText = styled.p`
  font-size: 2.125rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;
