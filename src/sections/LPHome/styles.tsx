import styled from 'styled-components'
import { Card as GlobalCard } from '@/styles/globalStyles'

export const Section = styled.section`
  width: 100%;
  height: 1041px;
  background: url('/images/bg_lp_home.png') center center no-repeat;
  background-size: cover;
`

export const Card = styled(GlobalCard)`
  grid-column: 2 / 7;
  grid-row: 4 / 8;

  @media (max-width: 1440px) {
    grid-column: 2 / 8;
  }
  @media (max-width: 1024px) {
    grid-column: 2 / 12;
    grid-row: 2 / 6;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: auto;
    margin: 2rem 1rem;
  }
`

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
`

export const CardHeader = styled.h1`
  color: var(--color-yellow);
  font-size: 38px;
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

export const CardSpan = styled.span`
  font-size: 71px;
  line-height: 91px;
  color: var(--color-yellow);

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 65px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    line-height: 48px;
  }
`
export const DescriptionWrapper = styled.div`
  grid-column: 2 / 8;
  grid-row: 8 / 11;

  @media (max-width: 1440px) {
    grid-column: 2 / 10;
  }

  @media (max-width: 1024px) {
    grid-column: 2 / 12;
    grid-row: 6 / 9;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: auto;
    margin: 2rem 1rem;
  }
`
export const Description = styled.p`
  font-size: 35px;
  line-height: 49px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-align: left;
  align-self: start;

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 30px;
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
