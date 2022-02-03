import React from "react";
import { ContainerStyled } from "./ContainerStyled";

export const Container = ({ wide, children }) => {
  return <ContainerStyled wide={wide}>{children}</ContainerStyled>;
};
