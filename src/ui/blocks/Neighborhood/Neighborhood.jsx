import React, { useState } from "react";
import {
  Form,
  NeighborhoodWrapper,
  SendButton,
  Title,
} from "./NeighborhoodStyled";
import { Container } from "../../base/Container";
import { Input } from "../../base/Input";

const Neighborhood = () => {
  const [number, setNumber] = useState();
  const handleSubmit = () => {
    setNumber("");
  };
  return (
    <NeighborhoodWrapper>
      <Container>
        <Title>See what classes are available in your neighborhood</Title>
        <Form>
          <Input
            number
            setValue={setNumber}
            value={number}
            max={15}
            placeholder="Mobile number"
          />
          <SendButton background="pink" onClick={handleSubmit}>
            Send me a link
          </SendButton>
        </Form>
      </Container>
    </NeighborhoodWrapper>
  );
};

export default Neighborhood;
