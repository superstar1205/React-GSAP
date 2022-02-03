import React, { useEffect, useRef } from "react";
import { AppleIcon, GoogleIcon } from "../../icons";
import { Container } from "../../base/Container";
import { Button } from "../../base/Button";
import { ButtonRow, DownloadWrapper, Title } from "./DownloadStyled";
import { useLocation } from "react-router-dom";

const Download = () => {
  const sectionRef = useRef();
  const location = useLocation();

  useEffect(() => {
    location.hash === "#download" &&
      sectionRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
  }, [location]);

  return (
    <DownloadWrapper ref={sectionRef}>
      <Container>
        <Title>Download the App</Title>
        <ButtonRow>
          <Button icon={<AppleIcon />} bg="blue">
            Apple Store
          </Button>
          <Button icon={<GoogleIcon />} bg="blue">
            Google play
          </Button>
        </ButtonRow>
      </Container>
    </DownloadWrapper>
  );
};

export default Download;
