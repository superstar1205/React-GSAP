import React from "react";
import { BottomWrapper } from "./BottomStyled";
import { useContext } from "react";
import { ScrollContext } from "../../../App";

const Bottom = ({ children ,...props}) => {
  const { position, setPosition } = useContext(ScrollContext);
  
  return (
    <BottomWrapper {...props}>
      {children}
    </BottomWrapper>
  );
};

export default Bottom;
