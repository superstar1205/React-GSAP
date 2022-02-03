import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: ${({ wide }) => (wide ? "1620px" : "1380px")};
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;
