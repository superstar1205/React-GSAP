import React from "react";
import {
  AppleIcon,
  GoogleIcon,
  SocFacebookIcon,
  SocInstIcon,
  SocTwitterIcon,
} from "../../icons";
import { Button } from "../../base/Button";
import {
  Buttons,
  Col,
  FooterWrapper,
  Links,
  Row,
  Social,
  SocialItem,
  Text,
  ColText,
  ColBtn,
} from "./FooterStyled";
import { Container } from "../../base/Container";
import { routesPath } from "../../../conts/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container wide>
        <Row>
          <Col>
            <Social>
              <SocialItem
                target="_blank"
                href="https://www.instagram.com/teache_app/"
              >
                <SocInstIcon />
              </SocialItem>
              <SocialItem
                target="_blank"
                href="https://www.facebook.com/Teacheapp/"
              >
                <SocFacebookIcon />
              </SocialItem>
              <SocialItem target="_blank" href="https://twitter.com/teache_app">
                <SocTwitterIcon />
              </SocialItem>
            </Social>
            <Links>
              <Link to={routesPath.privacy}>Privacy</Link>
              <Link to={routesPath.terms}>Terms</Link>
            </Links>
          </Col>
          <ColText>
            <Text>Copyright © 2021 Teache. All rights reserved</Text>
          </ColText>
          <ColBtn>
            <Buttons>
              <Button icon={<AppleIcon />} bg="blue">
                Apple Store
              </Button>
              <Button icon={<GoogleIcon />} bg="blue">
                Google play
              </Button>
            </Buttons>
          </ColBtn>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
