import { Container, Section } from "@/styles/globalStyles";
import styled from "styled-components";

export const SolucaoSection = styled(Section)`
  margin: 5rem 0;
  background: url("/images/bg_section02.png") center center no-repeat;
  background-size: cover;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
`;

export const SubtitleMainText = styled.p`
  color: var(--color-white);
  font-size: 25px;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 1600px;
`;

export const SubtitleSpan = styled.span`
  color: var(--color-yellow);
  font-weight: bold;
  text-align: center;
  font-size: 25px;
  text-align: center;
  max-width: 1600px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const PositionedCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-bottom: 5rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.84vw;
  width: 100%;
  gap: 5rem;
`;

export const CardItemText = styled.p`
  color: var(--color-white);
  font-size: 21px;
  width: 80%;
  margin-left: 4rem;
`;

export const CardItemIcon = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;
