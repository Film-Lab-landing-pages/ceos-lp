import styled from "styled-components";
import { colors } from "@/styles/globalStyles";

export const InscriptionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 500;

  &.active {
    opacity: 1;
  }
  form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 400px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.offWhite};
    border: 12px solid ${colors.black};
    border-radius: 16px;
    box-shadow: 0 0 12px 2px ${colors.black};
    z-index: 100;

    input,
    button {
      display: block;
      width: 52%;
      height: 15%;
      border: none;
      border-radius: 8px;
    }
    input {
      padding: 0 1rem;
      font-size: 1.2rem;
      &:hover {
        border: 2px solid rgba(0, 0, 0, 0.2);
      }
      &:focus-visible {
        border: 2px solid rgba(0, 0, 0, 0.3);
        outline: none;
      }
    }
    button {
      background-color: var(--color-yellow);
      font-weight: 900;
      font-size: 1.6rem;
      &:hover {
        filter: brightness(1.06);
      }
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 70;
  }
  .error-message {
    color: #f9322bcc;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    line-height: 0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    form {
      width: 90%;
      height: 75%;
      padding: 1rem;
      gap: 2.6rem;
      input {
        width: 80%;
      }
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-family: "Arial", sans-serif; /* Fonte system para símbolos */
  font-size: 2rem;
  line-height: 1rem;
  color: ${colors.black};
  opacity: 0.29;
  &:hover {
    opacity: 0.5;
  }
`;
