import styled from "styled-components";
import { Button, Section } from "@/styles/globalStyles";

export const SairDessaSection = styled(Section)`
  background-image: url("/images/bg_stocks-up.png");
  background-size: cover;
  padding: 5rem;
  h2 {
    margin: 0 auto 7rem;
    font-size: 4.75rem;
    text-align: center;
  }
  .flex-card {
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 6rem;
    gap: 8%;
  }
  p {
    border: 1px solid var(--color-yellow);
    border-radius: 8px;
    padding: 4rem 2.5rem;
    font-size: 1.25rem;
    line-height: 2.5em;
    text-align: center;
  }
  @media (max-width: 1024px) {
    .flex-card {
      flex-direction: column;
      padding: 4rem;
      gap: 3rem;
    }
    h2 {
      margin: 0 auto 4rem;
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
