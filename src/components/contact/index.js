import { Title } from "components/Title";
import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";

export default function Contact(props) {
  const { interest } = props;

  return (
    <Container>
      <Title
        containerStyles="margin-bottom: 40px;"
        align="center"
        spanWidth="120px"
      >
        Contact Us
      </Title>
      <Form interest={interest} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
