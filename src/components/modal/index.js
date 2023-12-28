import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";

export default function Modal(props) {
  const { show, content, handleOrder, closeModal } = props;
  const { name, description, imgSrc, imgAlt } = content;

  return (
    <Container show={show}>
      <Card>
        <ButtonContainer>
          <button onClick={closeModal}>X</button>
        </ButtonContainer>
        <Image src={imgSrc} alt={imgAlt} />
        <Title align="center" spanWidth="150px">
          {name}
        </Title>
        <Text>{description}</Text>
        <button onClick={() => handleOrder(name)}>Order Package</button>
      </Card>
    </Container>
  );
}

const Card = styled.div`
  box-sizing: border-box;
  padding: 20px 10px 40px 10px;
  width: 45vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  box-shadow: 0px 2px 2px 1px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 0px 20px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  height: auto;
  width: 400px;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: medium;
  text-align: center;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
