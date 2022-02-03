import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Body,
  Content,
  PrivacyPolicyWrapper,
  SideBar,
  SideBarItem,
  Title,
} from "./PrivacyPolicyStyled";
import { Container } from "../../base/Container";
import { routesPath } from "../../../conts/routes";
import { PrivacyPolicyText } from "./PrivacyPolicyText";
import Terms from "./Terms";

const AgreementsView = () => {
  const [active, setActive] = useState({ policy: true, terms: false });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/privacy-policy") {
      setActive({ policy: true, terms: false });
    } else {
      setActive({ policy: false, terms: true });
    }
  }, [location.pathname]);

  return (
    <PrivacyPolicyWrapper>
      <Container>
        <Title>{active.policy ? "Privacy Policy" : "Terms"}</Title>
        <Body>
          <SideBar>
            <NavLink to={routesPath.privacy} exact>
              <SideBarItem active={active.policy}>Privacy Policy</SideBarItem>
            </NavLink>
            <NavLink to={routesPath.terms} exact>
              <SideBarItem active={active.terms}>Terms of Use</SideBarItem>
            </NavLink>
          </SideBar>
          <Content>
            {active.policy && <PrivacyPolicyText />}
            {active.terms && <Terms />}
          </Content>
        </Body>
      </Container>
    </PrivacyPolicyWrapper>
  );
};

export default AgreementsView;
