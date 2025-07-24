import { Container, Section } from "@/styles/globalStyles";
import styled from "styled-components";

export const SolucaoSection = styled(Section)`
  margin: 5rem 0;
  background: url("/images/bg_a_solucao.png") center center no-repeat;
  background-size: cover;
  .hide-on-desktop {
    display: none;
  }

  @media (max-width: 480px) {
    background: none;
    .hide-on-desktop {
      display: block;
    }
    .coin {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 7.5rem;

  @media (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

export const SubtitleMainText = styled.p`
  color: var(--color-white);
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 1600px;

  @media (max-width: 1024px) {
    font-size: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const SubtitleSpan = styled.span`
  color: var(--color-yellow);
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  text-align: center;
  max-width: 1600px;

  @media (max-width: 1024px) {
    font-size: 2rem;
    padding: 0 1rem;
    margin-bottom: 7.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center !important;
  }
`;

export const PositionedCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    width: 90% !important;
  }

  @media (max-width: 480px) {
    width: 85% !important;
    margin-bottom: 3rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 2rem;
    gap: 1.5rem;
  }
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CardItemText = styled.p`
  color: var(--color-white);
  font-size: 21px;
  width: 80%;
  margin-left: 4rem;

  @media (max-width: 480px) {
    order: 2;
    font-size: 1.2rem;
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`;

export const CardItemIcon = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  .mobile-number {
    display: none;
  }

  @media (max-width: 1024px) {
    width: auto;
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    order: 1;

    img,
    [data-nimg] {
      display: none !important;
    }

    .mobile-number {
      display: block;
      font-size: 4.5rem;
      color: #ffc802;
      font-weight: bold;
      text-align: center;
    }
  }
`;
