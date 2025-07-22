import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #fff;
  color: #000;
  height: 10%;
  min-height: 75px;
  width: 100%;
  padding: 16px 70px 16px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .hide-on-desktop {
    display: none;
  }
  .logo-and-copyright {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  img {
    width: 150px;
    height: auto;
  }

  .copyright {
    font-size: 14px;
  }

  .filmelab-website {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px 20px;

    .logo-and-copyright {
      margin-top: 1.5rem;
      width: 50%;
      flex-direction: column;
      margin-bottom: 16px;
      .copyright {
        font-size: 1rem;
        line-height: 1.8rem;
      }
    }

    img {
      width: 120px;
    }

    .filmelab-website {
      font-size: 1.5rem;
    }
    .hide-on-desktop {
      display: block;
    }
  }
`;
