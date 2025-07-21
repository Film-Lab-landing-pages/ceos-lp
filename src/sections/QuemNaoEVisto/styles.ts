import styled from "styled-components";
import { Card, Section } from "@/styles/globalStyles";

export const VistoSection = styled(Section)`
  padding: 5rem 0;
  margin-bottom: 2.5rem;
  background: url("/images/bg_instagram-mobile.png") center center no-repeat;
  background-size: cover;
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
  h3 {
    font-weight: 400;
    font-size: 2rem;
    font-style: regular;
  }
  p {
    font-weight: 300;
    font-style: Light;
    font-size: 1.4rem;
    line-height: 2.5em;
    opacity: 0.7;
  }
`;

export const VistoCard = styled(Card)`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 7%;
  img {
    height: 70px;
  }
`;
