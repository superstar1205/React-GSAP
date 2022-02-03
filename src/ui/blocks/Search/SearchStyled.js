import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import {
  InputIcon,
  InputStyled,
  InputWrapper,
} from "../../base/Input/InputStyled";
import { ButtonStyled } from "../../base/Button/ButtonStyled";

export const SearchWrapper = styled.div`
  padding: 214px 40px 0;
  @media (max-width: 1200px) {
    padding: 154px 40px 0;
  }
  @media (max-width: 768px) {
    padding: 82px 20px 0 20px;
  }
`;

export const Title = styled.div`
  font-size: ${themeFontSize("h2")};
  color: ${themeColor("txt")};
  font-weight: 600;
  font-family: Poppins, sans-serif;
  @media (max-width: 1200px) {
    font-size: 37px;
    letter-spacing: -0.6px;
  }
  @media (max-width: 768px) {
    font-size: ${themeFontSize("h5")};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  max-width: 800px;
  ${InputWrapper} {
    margin-right: 20px;
  }
  @media (max-width: 1200px) {
    max-width: 753px;

    ${InputStyled} {
      height: 48px;
      padding: 15px 20px 15px 57px;
    }
    ${InputIcon} {
      width: 23px;
      height: 23px;
      left: 19px;
    }
    ${ButtonStyled} {
      font-weight: bold;
      width: 220px;
      height: 48px;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;

    ${InputWrapper} {
      margin-right: 0;
      margin-bottom: 10px;
    }

    ${InputStyled} {
      padding: 10px 20px 10px 53px;
    }

    ${InputIcon} {
      width: 23px;
      height: 23px;
      left: 15px;
    }

    ${ButtonStyled} {
      height: auto;
      width: 100%;
      font-weight: bold;
      padding: 11px 20px;
      border-radius: 5px;
    }
  }
`;
