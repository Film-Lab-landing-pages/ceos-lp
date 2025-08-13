import { Container, Section } from '@/styles/globalStyles'
import styled from 'styled-components'

export const SolucaoSection = styled(Section)`
  padding: 5rem 0;
  background: url('/images/bg_a_solucao.png') center center no-repeat;
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
    padding: 2rem 0;
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
`

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    @media (max-width: 1024px) {
      font-size: 3.8rem;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      font-size: 3.2rem;
    }

    @media (max-width: 480px) {
      font-size: 2.2rem;
      white-space: nowrap;
    }

    @media (max-width: 360px) {
      font-size: 1.9rem;
    }
  }
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`

export const SubtitleMainText = styled.p`
  color: var(--color-yellow);
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 1600px;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 0 1rem;
    line-height: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }
`

export const SubtitleSpan = styled(SubtitleMainText).attrs({ as: 'span' })`
  color: var(--color-white);
`

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`

export const PositionedCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  margin-bottom: 5rem;
  padding: 4rem 9rem 4rem 4rem;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 3rem 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin-bottom: 2rem;
    padding: 2rem 1.5rem;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  padding: 2rem;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 2rem;
  }
`
export const SolutionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 2rem;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
  }
`

export const SolutionText = styled.div`
  max-width: 80%;
  text-align: right;

  strong,
  p {
    font-size: 2.2rem;
    line-height: 3rem;
    font-family: 'Poppins', sans-serif;
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
    max-width: 85%;

    strong,
    p {
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;

    strong,
    p {
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
    text-align: center;

    strong,
    p {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }

    p + p {
      margin-top: 0.2rem;
    }
  }
`

export const SolutionNumber = styled.span`
  font-size: 70px;
  width: 10%;
  line-height: 33px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700; /* poppins-bold */
  color: var(--color-yellow);
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 60px;
    line-height: 30px;
    width: 15%;
  }

  @media (max-width: 768px) {
    font-size: 55px;
    line-height: 30px;
    width: auto;
  }

  @media (max-width: 480px) {
    order: -1; /* Coloca o número acima */
    font-size: 40px;
    line-height: 24px;
    margin-bottom: 0.5rem;
    width: auto;
  }
`
