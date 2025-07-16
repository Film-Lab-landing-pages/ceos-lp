import styled from "styled-components";
import { colors } from "@/styles/globalStyles";

export const ParaQuemContainer = styled.section`
  margin-bottom: 5rem;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto auto auto;

  h2 {
    grid-row: 1;
    grid-column: 1/13;
  }
  .explanation {
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 600;
    grid-row: 2;
    grid-column: 1/12;

    span {
      color: ${colors.yellow};
    }
  }

  .grid {
    grid-row: 3;
    grid-column: 2/ 12;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 5%;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    padding: 2rem 0 5rem;
    h3 {
      font-weight: 400;
      font-size: 1.5rem;
      width: 50%;
    }
    p {
      width: 80%;
    }
  }

  //remove the placeholder divs
  .placeholder {
    padding: 2rem;
    background: #ffffff0d;
    border-radius: 8px;
    border: 1px solid #ffffff1a;
    backdrop-filter: blur(60px);
  }
  button {
    margin-top: 3rem;
    grid-row: 4;
    grid-column: 6/ 8;
    justify-self: center;
  }
`;
