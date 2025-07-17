import { off } from "process";
import styled from "styled-components";

export const colors = {
  white: "#ffffff",
  yellow: "#ffc802",
  black: "#000000",
  offWhite: "#D9D9D9",
};

export const Title = styled.h2`
  color: ${colors.yellow};
  font-size: 5em;
`;

interface ButtonProps {
  size: "small" | "large";
}

export const Button = styled.button<ButtonProps>`
  width: 15rem;
  background-color: ${colors.yellow};
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "16px 32px")};
  font-size: ${(props) => (props.size === "small" ? "1.2rem" : "1.8rem")};
  font-weight: 700;
  font-style: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 12px 2px rgba(255, 200, 2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: #ffffff0d;
  border-radius: 16px;
  border: 1px solid #ffffff1a;
  backdrop-filter: blur(60px);
`;
