import { Section } from "@/styles/globalStyles";
import styled from "styled-components";
import { Container as GlobalContainer } from "@/styles/globalStyles";

interface ButtonProps {
  size: "small" | "large";
}

export const ClassSection = styled(Section)`
  margin: 5rem 0;
  background: url("/images/bg_section02.png") center center no-repeat;
  background-size: cover;
  h2 {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    margin: 4rem 0;
  }
`;

export const Container = styled(GlobalContainer)`
  width: 80%;
  button {
    margin: 0 auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    justify-content: center;
  }
`;

export const Subtitle = styled.p`
  color: #ccc;
  font-size: 2rem;
  line-height: 1;
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 0 auto;
  }
`;

export const LeftContainer = styled.div`
  width: 30%;
  padding: 1rem;
  padding-left: 0;

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
  @media (max-width: 768px) {
    width: 80%;
    align-self: center;
    text-align: center;
    h3 {
      font-size: 1.8rem;
      width: 70%;
      margin: 0 auto 2rem;
      line-height: 2.1rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
`;

export const CenterContainer = styled.div`
  padding: 1rem;
  width: 40%;

  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    width: 80%;
    align-self: center;
  }
`;

export const RightContainer = styled.div`
  width: 30%;
  padding: 1rem;
  align-self: flex-end;

  div {
    padding: 16px;
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-family: var(--font-poppins);
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 80%;
    align-self: center;
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
