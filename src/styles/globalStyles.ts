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
  box-shadow: 0 0 4px 2px rgba(255, 200, 2, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 480px) {
    width: 14rem;
  }

  &:hover {
    background-color: rgba(255, 200, 2, 0.95);
    box-shadow: 0 0 8px 4px rgba(255, 200, 2, 0.7);
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
  @media (max-width: 480px) {
    width: 50%;
    height: auto;
    margin-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: none;
    box-shadow: none;
    border: none;

    nav {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    img {
      width: 50%;
      justify-self: center;
    }
  }
`;
