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
  position: fixed;
  bottom: 0;
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
`;
