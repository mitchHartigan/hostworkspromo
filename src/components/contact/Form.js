import React, { useState } from "react";
import styled from "styled-components";

import { FormInput } from "./FormInput";
import { SubmitButton } from "./SubmitButton";
import { TextArea } from "./TextArea";

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: "",
  invalidName: false,
  invalidEmail: false,
  invalidMessage: false,
  invalidPhone: false,
  submitted: false,
  success: false,
};

export default function Form(props) {
  const [state, setState] = useState(initialState);

  const {
    name,
    email,
    message,
    phone,
    invalidName,
    invalidEmail,
    invalidMessage,
    invalidPhone,
    submitted,
    success,
  } = state;

  const { interest } = props;

  function handleUpdate(evt) {
    const { name, value } = evt.target;
    setState({ [name]: value });
  }

  function validateForm() {}

  function handleSubmit() {}

  return (
    <Container>
      <FormInput
        label="Name"
        name="name"
        onChange={handleUpdate}
        invalid={invalidName}
      />
      <FormInput
        label="Email"
        name="email"
        onChange={handleUpdate}
        invalid={invalidEmail}
      />
      <FormInput
        label="Phone Number"
        name="phone"
        onChange={handleUpdate}
        invalid={invalidPhone}
      />
      <TextArea
        label="Message"
        name="message"
        onChange={handleUpdate}
        invalid={invalidMessage}
        interest={interest}
      />

      <SubmitButton onClick={validateForm} submitted={submitted}>
        Send
      </SubmitButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43vw;
  min-width: 600px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 3.5vh 3vw 3.5vh 3vw;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px;

  @media (max-width: 700px) {
    width: 90%;
    min-width: 10vw;
  }
`;
