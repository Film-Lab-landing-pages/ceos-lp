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
`

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

export const SubtitleMainText = styled.p`
  color: var(--color-white);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 1600px;
`

export const SubtitleSpan = styled.span`
  color: var(--color-yellow);
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
  text-align: center;
  max-width: 1600px;
`

export const PacotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`

export const Pacote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 6rem 0 2rem 0;

  &.recomendado {
    border: 2px solid #ffc802;
    border-radius: 8px;
    padding: 1rem;
  }
`

export const Icon = styled.img`
  width: 9rem;
  height: 9rem;
`

export const PacoteTitle = styled.h3`
  color: #ffc802;
  font-size: 3.5rem;
  margin: 0;
`
export const CardHeader = styled.li`
  list-style: none;
  padding: 0.3rem;
  color: var(--color-white);
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 2rem;
`
export const PacotesCard = styled(Card)`
  height: 30rem;
`

export const CardItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  color: var(--color-white);
  font-size: 1.5rem;
  margin: 2rem;

  span.check {
    color: green;
    font-weight: bold;
    margin-right: 0.5rem;
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
  margin-top: 3rem;
  color: #ffc802;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  text-align: center;
  font-size: 3rem;
`
