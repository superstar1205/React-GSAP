import styled, { css } from "styled-components";
import { themeColor } from "../../theme";

const rowsStyles = (fitness, climbing, woman, man, date, time) => {
  return css`
    left: ${fitness
      ? "-42%"
      : climbing
      ? "51.5%"
      : woman
      ? "51%"
      : man
      ? "-51.5%"
      : date
      ? "-34.5%"
      : time
      ? "47%"
      : "0"};
    bottom: ${fitness
      ? `calc(48.5% - ${indent})`
      : climbing
      ? `calc(13.5% - ${indent})`
      : woman
      ? "58.5%"
      : man
      ? "14%"
      : date
      ? "72%"
      : time
      ? "17%"
      : "0"};
    width: ${fitness || climbing
      ? "15.625vw"
      : woman
      ? "22.396vw"
      : man
      ? "19.271vw"
      : date
      ? "13.750vw"
      : time
      ? "18.438vw"
      : "0"};
    @media (max-width: 1400px) {
      width: ${fitness || climbing
        ? "19vw"
        : woman
        ? "27vw"
        : man
        ? "23.2vw"
        : date
        ? "16.6vw"
        : time
        ? "22.2vw"
        : "19vw"};
      bottom: ${fitness
        ? "48.5%"
        : climbing
        ? "14%"
        : woman
        ? "58%"
        : man
        ? "13%"
        : date
        ? "71.5%"
        : time
        ? "16.5%"
        : "0"};
      left: ${fitness
        ? "-40%"
        : climbing
        ? "49%"
        : woman
        ? "50.5%"
        : man
        ? "-52%"
        : date
        ? "-33%"
        : time
        ? "47%"
        : "0"};
    }
    @media (max-width: 640px) {
      width: ${time ? "69.3vw" : "50vw"};
      bottom: ${fitness
        ? "48.5%"
        : climbing
        ? "24%"
        : woman
        ? "65%"
        : man
        ? "34%"
        : date
        ? "72%"
        : time
        ? "22%"
        : "0"};
      left: ${fitness
        ? "-32%"
        : climbing
        ? "39%"
        : woman
        ? "38%"
        : man
        ? "-33%"
        : date
        ? "-29%"
        : time
        ? "5%"
        : "0"};
    }
  `;
};
const indent = "70px";

export const StickyStyled = styled.div`
  overflow: hidden;
  position: relative;
`;

export const MainTitle = styled.div`
  color: ${themeColor("txt")};
  font-size: 4vw;
  text-align: center;
  font-family: Poppins, Montserrat, sans-serif;
  font-weight: 600;
  line-height: 4.2vw;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -450%);
  @media (max-width: 1400px) {
    font-size: 4.8vw;
    line-height: 5.5vw;
    transform: translate(-50%, calc(-350% - ${indent}));
  }
  @media (max-width: 640px) {
    font-size: 7.5vw;
    line-height: 10vw;
    transform: translate(-50%, -550%);
  }
`;

export const PhoneWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  height: 100%;
`;

export const PhonePicture = styled.div`
  border: 5px solid ${themeColor("txt")};
  border-radius: 20px;
  width: 17.188vw;
  height: 37.083vw;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: ${({ first }) => (first ? "100%" : "50%")};
  transition: all 0.5s;
  background-color: ${themeColor("txt")};
  transform: translate(
      -50%,
      ${({ first }) => (first ? `calc(-26vw - ${indent})` : "-50%")}
    )
    ${({ first }) => (first ? "scale(1.2)" : "scale(1.1)")};
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 1400px) {
    width: 20.8vw;
    height: 44.8vw;
    top: ${({ first }) => (first ? "100%" : "50%")};
    transform: translate(
        -50%,
        ${({ first }) => (first ? `calc(-30vw - ${indent})` : "-50%")}
      )
      ${({ first }) => first && "scale(1.2)"};
  }
  @media (max-width: 640px) {
    width: 53.125vw;
    height: 115vw;
    bottom: 0;
    top: auto;
    transform: ${({ first }) =>
      first ? "translate(-50%, 20%) scale(1.15)" : "translate(-50%, 22%)"};

    &.last {
      transform: translate(-50%, 0%);
    }
  }
`;

export const PictureRowsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  width: 17.188vw;
  height: 37.083vw;
  z-index: 3;
  opacity: ${({ first }) => (first ? 0 : 1)};
  transition: all 0.5s;
  @media (max-width: 1400px) {
    width: 20.8vw;
    height: 44.8vw;
    bottom: auto;
    top: 50%;
    transform: translate(
      -50%,
      ${({ first }) => (first ? `calc(-50% + ${indent})` : "-50%")}
    );
  }
  @media (max-width: 640px) {
    width: 53.125vw;
    height: 115vw;
    top: auto;
    bottom: 0;
    transform: translate(-50%, 22%);
    &.last {
      transform: translate(-50%, 0%);
    }
  }
`;

export const PictureRow = styled.div`
  position: absolute;
  z-index: 2;
  ${({ fitness, climbing, woman, man, date, time }) =>
    rowsStyles(fitness, climbing, woman, man, date, time)}
  border-radius: 10px;
  img {
    width: 100%;
    box-shadow: 4px 4px 20px 0 rgba(25, 29, 58, 0.17);
    border-radius: 10px;
  }
`;

export const Column = styled.div`
  color: ${({ dark, theme }) =>
    dark ? theme.colors["txt"] : theme.colors["white"]};
  position: absolute;
  width: 19vw;
  top: 50%;
  left: ${({ left }) => (left ? "16%" : "auto")};
  right: ${({ right }) => (right ? "16%" : "auto")};
  transform: translateY(-50%);
  text-align: left;
  opacity: ${({ first }) => (first ? 0 : 1)};
  transition: all 0.5s;
  @media (max-width: 1400px) {
    width: 27.5vw;
    left: ${({ left }) => (left ? "8%" : "auto")};
    right: ${({ right }) => (right ? "8%" : "auto")};
    top: 50%;
  }
  @media (max-width: 640px) {
    width: 56.25vw;
    top: auto;
    bottom: 0;
    left: ${({ right }) => (right ? "5%" : "auto")};
    right: ${({ left }) => (left ? "5%" : "auto")};
    transform: translateY(
      ${({ first }) => (first ? `calc(-400% - ${indent})` : "-400%")}
    );
    &.last {
      transform: translateY(-500%);
    }
  }
`;

export const ColumnTitle = styled.div`
  font-size: 1.8vw;
  font-family: Poppins, Montserrat, Roboto, "sans-serif";
  font-weight: 600;
  @media (max-width: 1400px) {
    font-size: 2vw;
  }
  @media (max-width: 1200px) {
    font-size: 2.4vw;
  }
  @media (max-width: 640px) {
    font-size: 5.625vw;
  }
`;

export const ColumnText = styled.div`
  font-size: 1.2vw;
  font-family: Montserrat, Poppins, Roboto, "sans-serif";
  font-weight: 500;
  margin-top: 14px;
  @media (max-width: 1400px) {
    font-size: 1.6vw;
    line-height: 1.5;
    margin-top: 0.79vw;
  }
  @media (max-width: 1200px) {
    font-size: 1.8vw;
  }
  @media (max-width: 640px) {
    font-size: 3.75vw;
    margin-top: 1.5vw;
  }
`;

export const Circle = styled.div`
  background-color: ${themeColor("txt")};
  width: 40.417vw;
  height: 40.417vw;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%);
  transform-origin: center;
  transition: all 0.5s;
  @media (max-width: 1400px) {
    width: 55.5vw;
    height: 55.5vw;
    bottom: 0;
    transform: translate(-50%, 35%);
  }
  @media (max-width: 640px) {
    width: 126.25vw;
    height: 126.25vw;
    bottom: 0;
    transform: translate(-50%, 28%);
  }
`;

export const Section = styled.div`
  position: relative;
  overflow: hidden;
  height: ${({ first }) => (first ? `calc(100vh + ${indent})` : "100vh")};
  width: 100%;
  &.pink {
    background-color: ${themeColor("pink")};
  }
  &.white {
    background-color: ${themeColor("white")};
  }
  &.wrap {
    ${Circle} {
      width: 180vw;
      height: 180vw;
      bottom: -20%;
    }
    ${PhonePicture} {
      top: 50%;
      transform: translate(
          -50%,
          ${({ first }) => (first ? `calc(-50% + ${indent})` : "-50%")}
        )
        scale(1.1);
    }
    ${PictureRowsWrapper} {
      opacity: 1;
    }
    ${Column} {
      opacity: 1;
    }
    @media (max-width: 1400px) {
      ${PictureRowsWrapper} {
        transform: translate(
          -50%,
          ${({ first }) => (first ? `calc(-50% + ${indent})` : "-50%")}
        );
      }
      ${PhonePicture} {
        top: 50%;
        transform: translate(-50%, calc(-50% + ${indent})) scale(1);
      }
      ${Circle} {
        bottom: 40%;
      }
    }
    @media (max-width: 640px) {
      ${PhonePicture} {
        transform: translate(-50%, calc(22% - ${indent})) scale(1);
      }
      ${PictureRowsWrapper} {
        transform: translate(-50%, calc(22% - ${indent}));
      }
      ${Circle} {
        width: 300vw;
        height: 300vw;
        bottom: 20%;
      }
    }
  }
`;
