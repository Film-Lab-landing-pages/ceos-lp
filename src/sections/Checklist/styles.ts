import styled from "styled-components";
import { Section } from "@/styles/globalStyles";

export const ChecklistSection = styled(Section)`
  padding: 2.5rem 0;
  background-image: url("/images/bg_stocks-up.png");
  background-size: cover;

  h2 {
    margin: 0 auto 5.5rem;
    font-size: 4.75rem;
    text-align: center;
  }

  .flex-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 6rem;
    gap: 3rem;
  }

  .hide-on-desktop {
    display: none;
  }

  @media (max-width: 1024px) {
    .flex-card {
      flex-direction: column;
      padding: 4rem;
    }
    h2 {
      margin: 0 auto 4rem;
    }
  }
  @media (max-width: 768px) {
    background-image: none;
    .hide-on-desktop {
      display: block;
    }
    .arrow {
      max-width: 80%;
      margin: 0 auto;
    }
    p {
      font-size: 1.2rem;
      text-align: center;
      padding: 1rem 0;
    }
    .container {
      width: 80%;
    }
    h2 {
      font-size: 3rem;
      margin: 0 auto 3rem;
    }
    .flex-card {
      padding: 2rem;
      gap: 2rem;
    }
    .flex-item {
      font-size: 1.2rem;
      padding: 1rem;
      border-radius: 8px;
      img {
        display: none;
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.8rem;
      margin: 0 auto 2rem;
    }
  }
`;

export const Subtitle = styled.h3`
  background-color: var(--color-yellow);
  color: var(--color-black);
  font-size: 3rem;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  text-align: center;

  margin-bottom: 4rem;
`;
export const CheckItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  font-size: 1.5rem;
  color: var(--color-white);
  width: 100%;

  padding: 1rem 2rem;
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
  .flex-item {
    width: 100%;
    border: 1px solid var(--color-yellow);
    border-radius: 8px;
    padding: 1rem;
  }
  p {
    font-weight: 700;
    font-size: 1.7rem;
    text-align: center;
  }
  @media (max-width: 480px) {
    gap: 2rem;
    flex-direction: column;
  }
`;
