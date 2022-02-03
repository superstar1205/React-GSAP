import React from "react";
import { LogoIcon } from "../../icons";
import { Container } from "../../base/Container";
import {
  Anchor,
  HeaderContent,
  HeaderWrapper,
  Logo,
  Navigation,
} from "./HeaderStyled";
import { Link } from "react-router-dom";
import { routesPath } from "../../../conts/routes";
import { HashLink } from "react-router-hash-link";

const Header = ({ solid, color }) => {
  return (
    <HeaderWrapper solid={solid}>
      <Container>
        <HeaderContent>
          <Logo>
            <Link to={routesPath.main}>
              <LogoIcon color={color !== "white" ? "blue" : "white"} />
            </Link>
          </Logo>
          <Navigation>
            <Link to={routesPath.faq}>
              <Anchor color={color}>FAQ</Anchor>
            </Link>
            <HashLink to={`${routesPath.main}#download`}>
              <Anchor color={color}>Download</Anchor>
            </HashLink>
          </Navigation>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
