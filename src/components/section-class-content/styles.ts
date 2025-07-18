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
`;

export const Subtitle = styled.p`
  color: #ccc;
  font-size: 27px;
  line-height: 1;
`;

export const LeftContainer = styled.div`
  grid-column: 2 / 5;
  grid-row: 4 / 12;

  h3 {
    font-size: 42px;
    margin-bottom: 12px;
    line-height: 45px;
    margin-left: 39px;
    color: #ffffff;
    word-break: break-word;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 30px;
  margin-left: 39px;
`;

export const CenterImage = styled.div`
  grid-column: 5 / 9;
  grid-row: 4 / 12;
  padding: 10px;

  img {
    width: 100%;
    /*     height: 630px; */
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`;

export const RightCard = styled.div`
  grid-column: 9 / 12;
  grid-row: 7 / 10;
  color: white;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  h3 {
    font-size: 30px;
    margin-bottom: 25px;
    font-family: var(--font-poppins);
    width: 100%;
  }
`;

export const RightList = styled.ul`
  list-style: decimal-leading-zero;
  font-family: var(--font-poppins);
  padding-left: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 30px;
  text-align: justify; /* Justifica o texto */
`;

export const EnrollButton = styled(Button)<ButtonProps>`
  grid-column: 1 / 13;
  grid-row: 12;
  justify-self: center;
`;
