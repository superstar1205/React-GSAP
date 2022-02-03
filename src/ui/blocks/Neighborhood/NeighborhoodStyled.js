import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import { InputWrapper } from "../../base/Input/InputStyled";
import { ButtonStyled } from "../../base/Button/ButtonStyled";

export const NeighborhoodWrapper = styled.div`
  margin-top: 68px;
  @media (max-width: 1200px) {
    margin-top: 38px;
    padding: 0 40px;
  }
  @media (max-width: 640px) {
    margin-top: 30px;
    padding: 0 20px;
  }
`;

export const SendButton = styled(ButtonStyled)`
  width: 230px;
  @media (max-width: 1200px) {
    width: 150px;
    height: 48px;
    font-size: ${themeFontSize("small")};
  }
  @media (max-width: 640px) {
    width: 100%;
    margin-top: 10px;
  }
`;
export const Title = styled.div`
  text-align: center;
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("large")};
  font-family: Montserrat, sans-serif;
  font-weight: normal;
  line-height: 1.5;
  max-width: 370px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    max-width: 100%;
    font-size: ${themeFontSize("regular")};
  }
  @media (max-width: 640px) {
    max-width: 280px;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 670px;
  width: 100%;
  margin: 50px auto 0;
  ${InputWrapper} {
    margin-right: 20px;
    max-width: 329px;
  }
  @media (max-width: 1200px) {
    margin: 30px auto 0;
    ${InputWrapper} {
      margin-right: 10px;
      max-width: 264px;
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    max-width: 280px;
    ${InputWrapper} {
      margin-right: 0;
      width: 100%;
      max-width: 280px;
    }
  }
`;
