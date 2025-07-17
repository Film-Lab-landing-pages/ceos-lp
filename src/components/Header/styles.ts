import styled from "styled-components";
import { Card } from "../../styles/globalStyles";

export const HeaderContainer = styled(Card).attrs({ as: "header" })`
  width: 80%;

  height: 70px;
  margin: 5rem auto 2.5rem;
  border-radius: 8px;

  nav {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
`;
