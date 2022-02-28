import styled, { css } from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const GalleryWrapper = styled.div`
  margin-bottom: 144px;
  margin-top: 300px;
  @media (max-width: 1400px) {
    padding: 0 4vw 6vw;
    margin-bottom: 7.2vw;
    margin-top: 150px;
  }
  @media (max-width: 768px) {
    padding: 0 0 48px;
    margin-bottom: 0;
    margin-top: 100px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: ${({ mr }) => mr && mr};
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ title, second, third, four }) =>
    title
      ? "120px 0 120px"
      : second
      ? "70px 0 65px"
      : third
      ? "0 0 140px"
      : four
      ? "140px 0 0"
      : "0"};
  @media (max-width: 1000px) {
    margin: ${({ title, second, third, four }) =>
      title
        ? "4.8vw 0 1.3vw"
        : second
        ? "1.5vw 0 4.2vw"
        : third
        ? "0 0 5.4vw"
        : four
        ? "6.5vw 0 0"
        : "0"};
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 9.375vw 0 !important;
  }
`;

export const Title = styled.div`
  font-family: Poppins, sans-serif;
  color: ${themeColor("txt")};
  font-size: ${themeFontSize("h2")};
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 40px;
  @media (max-width: 1400px) {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 2.5vw;
  }
   @media (max-width: 1400px) {
    font-size: 36px;
    line-height: 60px;
    margin-bottom: 2.5vw;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 60px;
    margin-bottom: 5vw;
    text-align: center;
  }
  
  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 5vw;
    text-align: center;
  }
`;

export const Text = styled.div`
  font-size: ${themeFontSize("big")};
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  color: ${themeColor("black")};
  max-width: ${({ width }) => (width ? `${width}px` : "355px")};
  @media (max-width: 1400px) {
    font-size: 1.6vw;
    line-height: 2.4vw;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: ${({ big }) => (big ? "5vw" : "4.375vw")};
    line-height: ${({ big }) => (big ? "7.5vw" : "6.563vw")};
    text-align: center;
    max-width: 100%;
    padding: 0 6.25vw;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const ImageStyled = styled.img`
  position: absolute;
  height: ${({ high }) => (high ? "100%" : "auto")};
  width: ${({ wide }) => (wide ? "100%" : "auto")};
  top: 50%;
  left: 50%;
  transition: all 0.5s 0.1s cubic-bezier(0.6, 0.05, 0.01, 0.99);
  transform: translate(-50%, 100%) scale(1.2);
`;

const styleImages = (horse, yoga, fight, boat, appPreview) => {
  return css`
    width: ${horse
      ? "640px"
      : yoga
      ? "530px"
      : fight
      ? "530px"
      : boat
      ? "468px"
      : appPreview
      ? "100%"
      : ""};
    height: ${horse
      ? "772px"
      : yoga
      ? "387px"
      : fight
      ? "560px"
      : boat
      ? "511px"
      : appPreview
      ? "630px"
      : ""};
    margin: ${({ margin }) => (margin ? margin : "")};
    @media (max-width: 1400px) {
      width: ${horse
        ? "41.2vw"
        : yoga
        ? "43vw"
        : fight
        ? "31.7vw"
        : boat
        ? "37.4vw"
        : appPreview
        ? "100%"
        : ""};
      height: ${horse
        ? "50vw"
        : yoga
        ? "31.9vw"
        : fight
        ? "34.7vw"
        : boat
        ? "33.9vw"
        : appPreview
        ? "44.6vw"
        : ""};
    }
    @media (max-width: 768px) {
      width: 100%;
      height: ${horse
        ? "78.438vw"
        : yoga
        ? "56.250vw"
        : fight
        ? "95.938vw"
        : boat
        ? "105.938vw"
        : appPreview
        ? "83.750vw"
        : ""};
      ${horse && "margin-bottom: 140px"};
    }
  `;
};

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  ${({ horse, yoga, boat, fight , appPreview }) =>
    styleImages(horse, yoga, boat, fight, appPreview)};
  margin: ${({ margin }) => (margin ? margin : "")};
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${themeColor("blue")};
    position: absolute;
    left: 50%;
    transition: all 1s cubic-bezier(0.6, 0.05, 0.01, 0.99);
    transform: translateX(-50%);
    z-index: 2;
    top: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  &.active {
    ${ImageWrapper} {
      &:before {
        top: -100%;
      }
      &:after {
        opacity: 0.5;
      }
    }
    ${ImageStyled} {
      transform: translate(-50%, -50%) scale(1);
      top: 50%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
