import styled from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

export const InfoWrapper = styled.div`
  padding: 0 16px;
  margin-top: 100px;
  @media (max-width: 1200px) {
    padding: 0 30px;
    margin-top: 75px;
  }
   @media (max-width: 992px) {
    padding: 0 30px;
    margin-top: 75px;
  }
  @media (max-width: 640px) {
    padding: 0 50px;
    margin-top: 0px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1275px;
  margin: 0 auto;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 18px;
  width: 25%;
  @media (max-width: 1200px) {
    padding: 0 8px;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 16px;
  }
  @media (max-width: 640px) {
    width: 100%;
    max-width: 320px;
    margin: 0 auto 40px;
  }
`;

export const Icon = styled.div`
  width: 40px;
  svg {
    width: 100%;
    fill: ${themeColor("blue")};
  }
  @media (max-width: 1200px) {
    width: 30px;
  }
`;

export const Title = styled.div`
  color: ${themeColor("blue")};
  font-size: ${themeFontSize("large")};
  line-height: 33px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  margin-top: 20px;
  @media (max-width: 1200px) {
    font-size: ${themeFontSize("regular")};
    line-height: 24px;
    margin-top: 11px;
  }
`;

export const Text = styled.div`
  color: ${themeColor("black")};
  font-size: ${themeFontSize("medium")};
  line-height: 27px;
  font-family: Montserrat, sans-serif;
  margin-top: 15px;
  @media (max-width: 1200px) {
    font-size: ${themeFontSize("small")};
    line-height: 19px;
    margin-top: 5px;
  }
`;
