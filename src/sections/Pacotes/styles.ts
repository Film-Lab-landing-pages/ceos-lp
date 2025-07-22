import { Section } from '@/styles/globalStyles'
import styled from 'styled-components'

export const PacotesSection = styled(Section)`
  margin: 5rem 0;
  /* background: url('/images/bg_section02.png') center center no-repeat;
  background-size: cover; */
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
  font-size: 25px;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 1600px;
`

export const SubtitleSpan = styled.span`
  color: var(--color-yellow);
  font-weight: bold;
  text-align: center;
  font-size: 25px;
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

  &.recomendado {
    border: 2px solid #ffc802;
    border-radius: 8px;
    padding: 1rem;
  }
`

export const Icon = styled.img`
  width: 64px;
  height: 64px;
`

export const PacoteTitle = styled.h3`
  color: #ffc802;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`

export const CardItem = styled.li`
  list-style: none;
  padding: 0.3rem 0;
  color: #fff;
  font-size: 0.95rem;
  line-height: 1.4;
`

export const CardItemInativo = styled(CardItem)`
  color: red;
  text-decoration: line-through;
`

export const Selo = styled.div`
  margin-top: 1.5rem;
  font-weight: bold;
  color: #ffc802;
  background-color: rgba(255, 200, 2, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 6px;
  text-align: center;
`
