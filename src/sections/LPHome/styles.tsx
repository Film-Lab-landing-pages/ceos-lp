import styled from "styled-components";
import {
  Card as GlobalCard,
  Container as GlobalContainer,
} from "@/styles/globalStyles";

export const Section = styled.section`
  width: 100%;
  background: url("/images/bg_lp_home.png") center center no-repeat;
  background-size: cover;
  padding: 5% 0;
  .hide-on-desktop {
    display: none;
  }

  @media (max-width: 480px) {
    background: url("/images/bg_lp_home-mobile.png") center center no-repeat;
    background-size: cover;
    .hide-on-desktop {
      display: block;
    }
    .hide-on-mobile {
      display: none;
    }
  }
`;

export const Container = styled(GlobalContainer)`
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

  @media (max-width: 768px) {
    max-width: 90%;
    align-self: center;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0;
    align-items: center;
    h1 {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
    h2 {
      font-size: 2rem;
      text-align: center;
    }
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
    padding: 0 0.5rem;
    max-width: 100%;
    font-size: 2rem;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
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

export const HeaderContainer = styled(Card).attrs({ as: "header" })`
  width: 50%;
  height: 70px;
  margin: 0 auto 5rem;
  border-radius: 8px;
  padding: 0 2rem;

  nav {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    img {
      width: 135px;
    }
    a {
      font-size: 1.5rem;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1200px) {
    width: 80%;
    height: 60px;
    padding: 0 1rem;

    nav {
      gap: 1rem;
      a {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 480px) {
    width: 50%;
    height: auto;
    margin-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: none;
    box-shadow: none;
    border: none;

    nav {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    img {
      width: 50%;
      justify-self: center;
    }
  }
`;
