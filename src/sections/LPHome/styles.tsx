import styled from 'styled-components'
import {
  Card as GlobalCard,
  Container as GlobalContainer,
} from '@/styles/globalStyles'

export const Section = styled.section`
  width: 100%;
  background: url('/images/bg_lp_home.png') center center no-repeat;
  background-size: cover;
  padding: 5% 0;
  .hide-on-desktop {
    display: none;
  }

  @media (max-width: 480px) {
    background: url('/images/bg_lp_home-mobile.png') center center no-repeat;
    background-size: cover;
    .hide-on-desktop {
      display: block;
    }
    .hide-on-mobile {
      display: none;
    }
  }
`

export const Container = styled(GlobalContainer)`
  align-items: left;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`

export const Card = styled(GlobalCard)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 2rem;
  width: 50%;
  h2 {
    color: var(--color-yellow);
  }
  span {
    color: var(--color-white);
  }

  @media (max-width: 1024px) {
    width: 70%;

    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    align-self: center;
    text-align: center;
    align-items: center;

    width: 90%;
    h1 {
      font-size: 1.7rem;
      margin-top: 1rem;
    }
    h2 {
      font-size: 4rem;
    }
  }
  @media (max-width: 480px) {
    padding: 3rem;
    gap: 0;
    h1 {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`

export const CardHeader = styled.h1`
  color: var(--color-yellow);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding: 6px 18px;
  border-radius: 6px;
  border: 1px solid var(--color-yellow);

  @media (max-width: 768px) {
    padding: 4px 12px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
  }
`

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
`

export const Description = styled.p`
  font-size: 2.5rem;
  max-width: 80%;
  line-height: 49px;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 1rem;
  margin: 0 0 5rem;
  text-align: left;
  align-self: start;
  border-left: 2px solid var(--color-white);
  display: flex;
  flex-direction: column;

  span,
  b {
    font-size: 3rem;
    line-height: 49px;
    color: rgba(255, 255, 255, 0.7);
  }

  b {
    font-family: 'Poppins Bold', sans-serif;
  }

  span {
    font-family: 'Poppins Light', sans-serif;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    max-width: 100%;

    span,
    b {
      font-size: 2rem;
      line-height: 38px;
    }
  }

  @media (max-width: 480px) {
    margin: 0 0 2rem;

    span,
    b {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }
`

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
`

export const ImageContainer = styled.div`
  max-width: 80%;
  margin: 4rem auto;

  img {
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`

export const InfoBox = styled.div`
  width: 84%;
  height: 194px;
  margin: 3rem auto 0;
  backdrop-filter: blur(60px);
  border-radius: 16px;
  border: 2px solid rgba(255, 200, 2, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  gap: 1rem;

  .main-text {
    font-size: 2.625rem; /* 42px converted to rem */
    line-height: 3rem; /* 42px converted to rem */
    color: var(--color-yellow);
    margin: 0;
  }

  .sub-text {
    font-size: 1.7rem; /* 32px converted to rem */
    line-height: 2.625rem; /* 42px converted to rem */
    color: var(--color-white);
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 1.5rem;

    .main-text {
      font-size: 1.8rem;
      line-height: 2rem;
    }

    .sub-text {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1rem;

    .main-text {
      font-size: 1.4rem;
      line-height: 1.6rem;
    }

    .sub-text {
      font-size: 1.1rem;
      line-height: 1.4rem;
    }
  }
`
