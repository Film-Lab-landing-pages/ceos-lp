import styled from "styled-components";
import { Card as GlobalCard } from "@/styles/globalStyles";

export const Section = styled.section`
  width: 100%;
  background: url("/images/bg_lp_home.png") center center no-repeat;
  background-size: cover;
  padding: 5% 0;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Card = styled(GlobalCard)`
  max-width: 50%;
  h2 {
    color: var(--color-white);
  }
  span {
    color: var(--color-yellow);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 8px;
  }
`;

export const CardHeader = styled.h1`
  color: var(--color-yellow);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding: 6px 18px;
  border-radius: 6px;
  border: 1px solid var(--color-yellow);

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 4px 12px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    padding: 4px 8px;
  }
`;

export const CardMainText = styled.p`
  font-size: 71px;
  line-height: 91px;
  color: var(--color-white);
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 60px;
    line-height: 80px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 65px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

export const Description = styled.p`
  font-size: 3rem;
  max-width: 60%;
  line-height: 49px;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 1rem;
  margin: 5rem 0 5rem;
  text-align: left;
  align-self: start;
  border-left: 2px solid var(--color-white);

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: 2 / 4;
  grid-row: 11 / 12;
  display: flex;
  align-items: center;

  @media (max-width: 1440px) {
    grid-column: 2 / 6;
  }

  @media (max-width: 1024px) {
    grid-column: 2 / 6;
    grid-row: 9 / 10;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: auto;
    justify-content: center;
    margin: 2rem 0;
  }
`;
