import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";
import { ButtonStyled } from "../../base/Button/ButtonStyled";

export const FooterWrapper = styled.div`
  height: 100px;
  border-top: 2px solid ${themeColor("lightBlue2")};
  padding: 0 16px;
  @media (max-width: 1200px) {
    padding: 0 40px;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
    height: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 930px) {
    flex-wrap: wrap;
  }
  @media (max-width: 640px) {
    padding-top: 25px;
    padding-bottom: 25px;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 930px) {
    order: 2;
    width: 100%;
  }
  @media (max-width: 640px) {
    order: 1;
    width: auto;
  }
`;

export const ColBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 930px) {
    order: 1;
  }
  @media (max-width: 640px) {
    order: 0;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
  a {
    &:nth-child(2) {
      @media (max-width: 640px) {
        margin: 0 20px 0 8px;
      }
    }
  }

  @media (max-width: 1200px) {
    margin-right: 45px;
  }
  @media (max-width: 640px) {
    margin-right: 19px;
    margin-bottom: 25px;
  }
`;

export const SocialItem = styled.a`
  cursor: pointer;
  margin: 0 15px;
  width: 25px;
  height: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${themeColor("txt")};
    transition: all 0.2s;
  }
  &:hover {
    svg {
      fill: ${themeColor("blue")};
    }
  }
  @media (max-width: 1200px) {
    margin: 0 0 0 19px;
  }
  @media (max-width: 640px) {
    margin: 0 12px 0 0;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins, sans-serif;
  a {
    margin: 0 25px;
    font-size: ${themeFontSize("medium")};
    color: ${themeColor("txt")};
    &:hover {
      color: ${themeColor("blue")};
    }
  }
  @media (max-width: 1200px) {
    justify-content: flex-start;
    a {
      font-size: ${themeFontSize("regular")};
      margin: 0 11px;
    }
  }
  @media (max-width: 640px) {
    a {
      font-size: ${themeFontSize("small")};
      margin: 0 11px 25px;
    }
  }
`;

export const Text = styled.div`
  font-size: ${themeFontSize("regular")};
  text-align: center;
  color: ${themeColor("gray")};
  font-family: Poppins, sans-serif;
  @media (max-width: 1200px) {
    font-size: ${themeFontSize("extraSmall")};
  }
  @media (max-width: 998px) {
    padding: 0 10px;
  }
  @media (max-width: 640px) {
    width: auto;
    padding: 0;
    margin-bottom: 7px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    margin-bottom: 16px;
  }
  ${ButtonStyled} {
    width: 180px;
    &:first-child {
      margin-right: 20px;
    }

    @media (max-width: 1200px) {
      font-size: ${themeFontSize("extraSmall")};
      font-weight: bold;
      height: 44px;
      width: 135px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
`;
