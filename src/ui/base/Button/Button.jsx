import React from "react";
import { ButtonStyled } from "./ButtonStyled";

export const Button = (props) => {
  const {
    color,
    bg,
    size,
    icon,
    transparent,
    center,
    width,
    children,
    onClick,
  } = props;
  return (
    <ButtonStyled
      center={center}
      color={color}
      background={bg}
      size={size}
      transparent={transparent}
      width={width}
      onClick={onClick}
    >
      {icon && icon}
      {children}
    </ButtonStyled>
  );
};
