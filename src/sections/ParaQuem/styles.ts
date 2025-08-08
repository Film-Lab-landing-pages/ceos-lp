import { Card } from '@/styles/globalStyles'
import styled from 'styled-components'
import { css } from 'styled-components'

export const ParaQuemContainer = styled.section`
  margin: 2.5rem auto 5.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;

  .alignedTitle {
    text-align: center;
  }

  .cards-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin: 3rem 0;
  }

  .grid {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .intermediate-title {
    font-size: 1.5rem; /* 24px converted to rem */
    line-height: 1.875rem; /* 30px converted to rem */
    color: var(--color-white);
    text-align: center;
    margin: 3rem 0 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    margin-top: 4rem;
    justify-self: center;
  }

  ${css`
    @media (max-width: 1024px) {
      h2 {
        font-size: 4.7rem;
        margin-bottom: 3rem;
      }

      .placeholder {
        width: 9rem;
        height: auto;
        margin: 1rem;
      }
    }

    @media (max-width: 768px) {
      .cards-container {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .grid {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 3rem;
        margin-bottom: 6rem;
      }
    }

    @media (max-width: 480px) {
      h2 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 2rem;
      }

      .cards-container {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 2rem 0;
      }

      .grid {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      button {
        width: auto;
        min-width: 12rem;
        align-self: center;
        margin-top: 2rem;
      }
    }
  `}
`

export const NewCard = styled(Card)`
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
  gap: 1rem;

  h2 {
    font-size: 1.5rem; /* 24px converted to rem */
    line-height: 1.875rem; /* 30px converted to rem */
    color: var(--color-white);
    margin: 0;
  }

  p {
    font-size: 1.5rem; /* 24px converted to rem */
    line-height: 1.875rem; /* 30px converted to rem */
    color: var(--color-yellow);
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 30%;

    h2 {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-bottom: 1rem;

    h2 {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
`

export const GridItem = styled(Card)`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 2rem 0 5rem;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .item-title {
    font-weight: 400;
    font-size: 2rem;
    width: 70%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .item-icon {
    width: 4rem;
    height: auto;
    max-width: 150px;
  }
  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    background: #ffffff0d;
    border-radius: 8px;
    border: 1px solid #ffffff1a;
    backdrop-filter: blur(60px);
    margin-top: 2rem;
  }
  p {
    color: #ffffffb2;
    width: 70%;
    font-weight: 300;
    font-style: Light;
    font-size: 1.2rem;
    line-height: 2.5rem;
    margin-top: 0;
  }
  @media (max-width: 1024px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 70%;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      width: 100%;
      margin-top: 0;
    }

    p {
      font-size: 1.5rem;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;

    h3 {
      font-size: 1.3rem;
      width: 100%;
      margin-top: 1rem;
    }

    .content {
      align-items: center;
      text-align: center;
    }

    p {
      font-size: 1.3rem;
      width: 100%;
    }
  }
`
