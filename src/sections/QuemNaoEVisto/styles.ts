import styled from 'styled-components'
import { Card, Section } from '@/styles/globalStyles'

export const VistoSection = styled(Section)`
  padding: 5rem 0;
  margin-bottom: 2.5rem;
  background: url('/images/bg_instagram-mobile.png') center center no-repeat;
  background-size: cover;
  @media (max-width: 480px) {
    background: url('/images/bg_instagram-mobile-mobile.png') center center
      no-repeat;
    background-size: cover;
  }
`

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5rem;
  h2 {
    font-size: 3.6rem;
  }
  h3 {
    font-weight: 400;
    font-size: 2rem;
    font-style: regular;
  }
  p {
    font-weight: 300;
    font-style: Light;
    font-size: 1.4rem;
    line-height: 2.5em;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    h2 {
      font-size: 2.8rem;
      margin: 0 auto;
      text-align: center;
    }
    h3 {
      margin-bottom: 2rem;
    }
  }
`

export const VistoCard = styled(Card)`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 7%;
  img {
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 5%;

    flex-direction: column;
    text-align: center;

    img {
      height: 4em;
    }
  }
`
