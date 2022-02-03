import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import { ButtonStyled } from "../../base/Button/ButtonStyled";

export const DownloadWrapper = styled.div`
  margin-top: 150px;
  padding: 0 16px;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 0 40px;
    margin-top: 90px;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
    margin-top: 50px;
  }
`;
export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${ButtonStyled} {
    margin: 0 10px;
    width: 180px;
  }

  @media (max-width: 1200px) {
    ${ButtonStyled} {
      margin: 0 5px;
      width: 135px;
      height: 44px;
      font-size: ${themeFontSize("extraSmall")};
    }
  }
`;

export const Title = styled.div`
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("h2")};
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.25;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 36px;
    line-height: 60px;
    margin-bottom: 10px;
  }
  @media (max-width: 640px) {
    font-size: ${themeFontSize("h5")};
    line-height: 36px;
    margin-bottom: 15px;
  }
`;
