import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const Anchor = styled.div`
  cursor: pointer;
  display: inline-flex;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: ${themeFontSize("medium")};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors["txt"]};
  transition: color 0.2s;

  &:hover {
    color: ${themeColor("blue")};
  }

  @media (max-width: 1200px) {
    font-size: ${themeFontSize("regular")};
  }
  @media (max-width: 640px) {
    font-size: ${themeFontSize("small")};
  }
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: ${({ solid }) => (solid ? "0 4px 10px 2px #00000008" : "none")};
  background-color: ${({ solid, theme }) =>
    solid ? theme.colors["white"] : "transparent"};
  z-index: 99;
  padding: 0 40px;
  @media (max-width: 1200px) {
    box-shadow: none;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  width: 220px;
  height: 100%;
  svg {
    width: 100%;
    height: 55px;
  }
  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 170px;
    svg {
      height: 30px;
    }
  }
  @media (max-width: 640px) {
    width: 115px;
    svg {
      height: 20px;
    }
  }
`;

export const Navigation = styled.div`
  a {
    &:first-child {
      margin-right: 70px;
    }
  }

  @media (max-width: 640px) {
    a {
      &:first-child {
        margin-right: 20px;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 87px;
  @media (max-width: 1200px) {
    height: 70px;
  }
  @media (max-width: 640px) {
    height: 50px;
  }
`;
