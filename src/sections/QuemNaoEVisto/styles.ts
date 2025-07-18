import styled from "styled-components";
import { Card, Section } from "@/styles/globalStyles";

export const VistoSection = styled(Section)`
  height: 828px;
  background: url("/images/bg_section02.png") center center no-repeat;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5rem;
  h2 {
    font-size: 3.6rem;
  }
`;

export const VistoCard = styled(Card)`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 7.5%;
  img {
    height: 70px;
  }
`;
