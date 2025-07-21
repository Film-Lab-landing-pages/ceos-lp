import styled from 'styled-components'

// 1) Container principal
export const ASolucaoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1079px;
  background: url('/images/bg_a_solucao.png');
  background-size: cover;
  background-position: center;
`

// 2) Flex container geral
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

// 3) Subtitle wrapper
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

// Novo container apenas para alinhar o Card à esquerda
export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 5rem;
  padding-left: 8.39%;
`

export const PositionedCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`

// 5) Card content
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
`

// 6) CardItem
export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.84vw;
  width: 100%;
`

export const CardItemText = styled.p`
  color: var(--color-white);
  font-size: 21px;
  width: 80%;
`

export const CardItemIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
