import { Card } from "@/styles/globalStyles";
import styled from "styled-components";
import { css } from "styled-components";

export const ParaQuemContainer = styled.section`
  margin: 0 auto 5.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;

  .alignedTitle {
    text-align: center;
  }

  .explanation {
    text-align: center;
    padding: 2rem;
    font-size: 2.5rem;
    font-weight: 600;

    span {
      color: var(--color-yellow);
    }
  }

  .grid {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-top: 2rem;
    justify-self: center;
  }

  ${css`
    @media (max-width: 1024px) {
      h2 {
        font-size: 4.7rem;
        margin-bottom: 3rem;
      }

      .explanation {
        font-size: 2rem;
        width: 56rem;
        margin-bottom: 3rem;

        span {
          font-size: 2rem;
        }
      }

      .placeholder {
        width: 9rem;
        height: auto;
        margin: 1rem;
      }
    }
    @media (max-width: 768px) {
      .grid {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 3rem;
        margin-bottom: 6rem;
      }
    }

    ${css`
      @media (max-width: 480px) {
        h2 {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .explanation {
          font-size: 1.5rem;
          padding: 1.5rem;
          width: 100%;

          span {
            font-size: 1.5rem;
          }
        }

        .grid {
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        button {
          width: 100%;
          max-width: 14.5rem;
          align-self: center;
          margin-top: 2rem;
        }
      }
    `}
  `}
`;

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
    width: 65%;
    font-weight: 300;
    font-style: Light;
    font-size: 1.2rem;
    line-height: 2rem;
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
`;
