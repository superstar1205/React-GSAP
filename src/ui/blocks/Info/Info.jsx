import React from "react";
import { CheckIcon, GearIcon, StarIcon, UserIcon } from "../../icons";
import { Container } from "../../base/Container";
import { Col, Icon, InfoWrapper, Row, Text, Title } from "./InfoStyled";

const InfoMock = [
  {
    id: "check",
    icon: <CheckIcon />,
    title: "Class Variety",
    text: "Wide range in variety of classes, everything that can be learned should be taught",
  },
  {
    id: "user",
    icon: <UserIcon />,
    title: "In-person Classes",
    text: "Teache focus on in-person classes offered in your current location",
  },
  {
    id: "gear",
    icon: <GearIcon />,
    title: "Management",
    text: "Through the app you can manage classes, calendar, communication and payments",
  },
  {
    id: "star",
    icon: <StarIcon />,
    title: "All Levels",
    text: "Classes available to beginners, intermedium and experts",
  },
];

const Info = () => {
  return (
    <InfoWrapper>
      <Container>
        <Row>
          {InfoMock.map((item) => (
            <Col key={item.id}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Col>
          ))}
        </Row>
      </Container>
    </InfoWrapper>
  );
};

export default Info;
