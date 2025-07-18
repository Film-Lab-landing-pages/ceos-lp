import styled from "styled-components";
import { colors } from "@/styles/globalStyles";

export const ParaQuemContainer = styled.section`
  margin: 5.5rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;

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
    gap: 7.5%;
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
      font-size: 2rem;
      width: 50%;
      margin-top: 2rem;
      margin-bottom: 0;
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
  }

  //remove the placeholder divs
  .placeholder {
    padding: 2rem;
    background: #ffffff0d;
    border-radius: 8px;
    border: 1px solid #ffffff1a;
    backdrop-filter: blur(60px);
    margin-top: 2rem;
  }
  button {
    margin-top: 3rem;
    justify-self: center;
  }
`;
