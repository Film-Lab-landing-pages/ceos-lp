import { Container, Section } from "@/styles/globalStyles";
import styled from "styled-components";

export const SolucaoSection = styled(Section)`
  padding: 5rem 0;
  background: url("/images/bg_a_solucao.png") center center no-repeat;
  background-size: cover;
  min-height: 95vh;
  .hide-on-desktop {
    display: none;
  }
  .hide-on-mobile {
    display: inline;
  }

  @media (max-width: 1200px) {
    .hide-on-mobile {
      display: none;
    }
  }

  @media (max-width: 480px) {
    background: none;
    .hide-on-desktop {
      display: block;
    }

    .hide-on-mobile {
      display: none;
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
  margin-bottom: 5rem;

  @media (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

export const SubtitleMainText = styled.p`
  color: var(--color-yellow);
  font-size: 1.5rem;
  font-weight: bold;
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

export const SubtitleSpan = styled(SubtitleMainText).attrs({ as: "span" })`
  color: var(--color-white);
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
  width: 65%;
  margin-bottom: 5rem;
  padding: 4rem 9rem 4rem 4rem;

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
  gap: 4rem;
  width: 100%;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 2rem;
    gap: 1.5rem;
  }
`;
export const SolutionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

export const SolutionText = styled.div`
  max-width: 80%;
  text-align: right;

  strong,
  p {
    font-size: 2.2rem;
    line-height: 3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    margin: 0;
  }

  strong {
    color: var(--color-yellow);
    font-weight: 700;
  }

  p {
    color: var(--color-white);
  }

  @media (max-width: 1024px) {
    font-size: 24px;

    strong,
    p {
      font-size: 28px;
      line-height: 40px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;

    strong,
    p {
      font-size: 28px;
      line-height: 40px;
    }

    @media (max-width: 480px) {
      max-width: 100%;

      strong,
      p {
        font-size: 20px;
        line-height: 30px;
      }

      p + p {
        margin-top: 0.2rem;
      }
    }
  }
`;

export const SolutionNumber = styled.span`
  font-size: 70px;
  line-height: 33px;
  font-family: "Poppins", sans-serif;
  font-weight: 700; /* poppins-bold */
  color: var(--color-yellow);

  @media (max-width: 768px) {
    font-size: 55px;
    line-height: 30px;
  }

  @media (max-width: 480px) {
    order: -1; /* Coloca o número acima */
    font-size: 48px;
    line-height: 28px;
    margin-bottom: 0.5rem;
  }
`;
