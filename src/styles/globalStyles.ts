import { off } from "process";
import styled from "styled-components";

export const colors = {
  white: "#ffffff",
  black: "#000000",
  offWhite: "#D9D9D9",
};

export const Title = styled.h2`
  color: var(--color-yellow);
  font-size: 5rem;
  font-weight: bold;
  /* line-height: 1; */
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Button = styled.button`
  width: 20rem;

  color: var(--color-black);
  background-color: rgba(255, 200, 2, 0.85);
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 900;
  font-style: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 8px 4px rgba(255, 200, 2, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  @media (max-width: 480px) {
    width: 14rem;
  }
`;

export const Card = styled.div`
  max-height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px); //60px no do Diego
  -webkit-backdrop-filter: blur(10px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  gap: 1rem;
`;
export const Section = styled.section`
  width: 100%;
  background: url("/images/bg_section02.png") center center no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
