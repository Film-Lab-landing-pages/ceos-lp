import { Card, Section } from '@/styles/globalStyles'
import styled from 'styled-components'

export const PacotesSection = styled(Section)`
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-black);
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media (max-width: 480px) {
    width: 95%;
  }
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`

export const SubtitleMainText = styled.p`
  color: var(--color-white);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 1600px;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 0 1rem;
  }
`

export const SubtitleSpan = styled.span`
  color: var(--color-yellow);
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  text-align: center;
  max-width: 1600px;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 0 1rem;
  }
`

export const PacotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`

export const Pacote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  margin: 6rem 0 2rem 0;

  &.recomendado {
    border: 2px solid #ffc802;
    border-radius: 8px;
    padding: 1rem 2rem;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 2rem 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    margin: 1.5rem 0;
  }
`

export const Icon = styled.img`
  width: 9rem;
  height: 9rem;

  @media (max-width: 1024px) {
    width: 12rem;
    height: 12rem;
  }

  @media (max-width: 480px) {
    width: 8rem;
    height: 8rem;
  }
`

export const PacoteTitle = styled.h3`
  color: #ffc802;
  font-size: 3.5rem;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    text-align: center;
  }
`
export const CardHeader = styled.li`
  list-style: none;
  padding: 0.3rem;
  color: var(--color-white);
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 0.5rem 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    text-align: center;
  }
`
export const PacotesCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 30rem;
  padding: 0 1.5rem;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 100%;
    padding: 3rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

export const CardItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  color: var(--color-white);
  font-size: 1.5rem;

  span.check {
    color: green;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: left;
  }
`

export const CardItemInativo = styled(CardItem)`
  span.cross {
    color: red;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`

export const Selo = styled.div`
  margin-top: auto;
  color: #ffc802;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 0.3rem 0.8rem;
  }
`
