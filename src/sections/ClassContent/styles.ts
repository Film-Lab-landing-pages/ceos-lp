import { Button, Card } from "@/styles/globalStyles";
import styled from "styled-components";

interface ButtonProps {
  size: "small" | "large";
}

export const Section = styled.section`
  width: 100%;
  height: 828px;
  background: url("/images/bg_section02.png") center center no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  grid-column: 2 / 12;
  grid-row: 2 / 4;
  padding: 1rem;
`;

export const Subtitle = styled.p`
  color: #ccc;
  font-size: 27px;
  line-height: 1;
`;

export const LeftContainer = styled.div`
  grid-column: 2 / 5;
  grid-row: 4 / 12;
  padding: 1rem;
  div {
    padding: 16px;
  }
  h3 {
    font-size: 4rem;
    margin-bottom: 12px;
    line-height: 4rem;
    color: #ffffff;
    word-break: break-word;
  }
  p {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 30px;
  }
`;

export const CenterContainer = styled.div`
  grid-column: 5 / 9;
  grid-row: 4 / 12;
  padding: 1rem;

  img {
    width: 100%;
    margin-bottom: 1.5rem;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  button {
    grid-column: 1 / 13;
    grid-row: 12;
    justify-self: center;
  }
`;

export const RightContainer = styled.div`
  grid-column: 9 / 12;
  grid-row: 6 / 12;
  padding: 1rem;

  div {
    padding: 16px;
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-family: var(--font-poppins);
    width: 100%;
  }
`;

export const RightList = styled.ul`
  list-style: decimal-leading-zero;
  border-radius: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
  }
  li {
    margin-left: 16px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 30px;

    font-weight: 300;
  }
`;
