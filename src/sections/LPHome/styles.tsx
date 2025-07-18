// Home/styles.ts
import styled from 'styled-components'
import { Card as GlobalCard } from '@/styles/globalStyles'

interface ButtonProps {
  size: 'small' | 'large'
}

export const Section = styled.section`
  width: 100%;
  height: 1041px;
  background: url('/images/bg_lp_home.png') center center no-repeat;
  background-size: cover;
`

export const ContentContainer = styled.div`
  grid-column: 2 / 8;
  grid-row: 3 / 12;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15rem;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 2rem;
  grid-column: 2 / 6;
  grid-row: 3 / 7;
`

export const CardHeader = styled.h1`
  color: var(--color-yellow);
  font-size: 38px;
  margin-bottom: 1rem;
  padding: 6px 18px;
  border-radius: 6px;
  border: 1px solid var(--color-yellow);
`

export const CardMainText = styled.p`
  font-size: 71px;
  line-height: 91px;
  color: var(--color-white);
  margin: 0;
`

export const CardSpan = styled.span`
  font-size: 71px;
  line-height: 91px;
  color: var(--color-yellow);
`

export const Description = styled.p`
  font-size: 35px;
  line-height: 49px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2rem;
  text-align: left;
`
