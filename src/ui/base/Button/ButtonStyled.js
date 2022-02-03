import styled from "styled-components";

export const ButtonStyled = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes["regular"]};
  border-radius: 10px;
  background: ${({ theme, background, transparent }) =>
    background && !transparent
      ? theme.colors[background]
      : transparent
      ? "transparent"
      : theme.colors.primary};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 60px;
  border: 1px solid transparent;
  ${({ transparent, theme }) =>
    transparent && `border-color: ${theme.colors["blue"]}`};
  font-weight: 500;
  padding: 12px 20px;
  ${({ center }) => center && "margin: 0 auto;"};
  transition: box-shadow 0.2s;
  svg {
    margin-right: 10px;
    width: 31px;
    min-width: 31px;
  }
  &:hover {
    box-shadow: 0 0 20px 0 rgba(25, 29, 58, 0.17);
  }
  @media (max-width: 1200px) {
    svg {
      min-width: 20px;
      width: 20px;
    }
  }
`;
