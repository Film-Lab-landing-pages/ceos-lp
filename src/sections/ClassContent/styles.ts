import { Section } from '@/styles/globalStyles'
import styled from 'styled-components'
import { Container as GlobalContainer } from '@/styles/globalStyles'

export const ClassSection = styled(Section)`
  margin: 5rem 0;
  background: url('/images/bg_section02.png') center center no-repeat;
  background-size: cover;
  @media (max-width: 1024px) {
    margin: 4rem 0;
    h2,
    h4 {
      margin: 0 auto;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    background: url('/images/bg-2-mobile.png') center center no-repeat;
    background-size: cover;
  }
`

export const Container = styled(GlobalContainer)`
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const Flex = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 1rem;
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: 28.5%;
  width: 40%;

  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;
  }
`

export const LeftContainer = styled.div`
  width: 35%;
  padding: 1rem;
  padding-left: 0;

  div {
    padding: 16px;
  }

  h3 {
    font-size: 4rem;
    margin-bottom: 16px;
    line-height: 4rem;
    color: var(--color-yellow);
    word-break: break-word;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 1rem;

    li {
      font-size: 1.6rem;
      line-height: 2.5rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.5rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: 1024px) {
    width: 80%;
    align-self: center;
    text-align: center;

    h3 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    ul {
      padding-left: 1rem;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.8rem;
      width: 70%;
      margin: 0 auto 1.2rem;
      line-height: 2.1rem;
    }

    ul {
      padding-left: 1rem;

      li {
        font-size: 0.95rem;
        line-height: 1.6rem;
      }
    }
  }
`

export const CenterContainer = styled.div`
  padding: 1rem;
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
    align-self: center;
    text-align: center;
  }
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    @media (max-width: 1024px) {
      max-width: 360px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    padding: 0;
    align-self: center;
  }
`

export const RightContainer = styled.div`
  width: 40%;
  padding: 1rem;
  align-self: flex-end;

  div {
    padding: 16px;
  }

  h3 {
    color: var(--color-yellow);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 80%;
    align-self: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    align-self: center;

    h3 {
      text-align: center;
      font-size: 1.5rem;
      margin: 0 auto 1rem;
      line-height: 2.1rem;
    }
  }
`

export const RightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li span {
    font-size: 15px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
    text-align: center;
  }

  li p {
    font-size: 15px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding-left: 1rem;

    li span,
    li p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`
