import styled from "styled-components";
import { Card } from "../../styles/globalStyles";

export const HeaderContainer = styled(Card).attrs({ as: "header" })`
  width: 50%;
  height: 70px;
  margin: 0 auto 5rem;
  border-radius: 8px;
  padding: 0 2rem;

  nav {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    img {
      width: 135px;
    }
    a {
      font-size: 1.5rem;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1200px) {
    width: 80%;
    height: 60px;
    padding: 0 1rem;

    nav {
      gap: 1rem;
      a {
        font-size: 1.2rem;
      }
    }
  }
`;
