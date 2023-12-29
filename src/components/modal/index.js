import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import { Button } from "components/Button";
import closeButtonSrc from "./button_close.svg";

export default function Modal(props) {
  const { show, content, handleOrder, closeModal } = props;
  const { name, description, imgSrc, imgAlt, price } = content;

  return (
    <Container show={show}>
      <Card>
        <CloseButtonContainer>
          <CloseButton
            src={closeButtonSrc}
            alt="close buttonb"
            onClick={closeModal}
          />
        </CloseButtonContainer>
        <Image src={imgSrc} alt={imgAlt} />
        <Title align="center" spanWidth="150px">
          {name}
        </Title>
        <Description>{description}</Description>
        <Price>Price: {price}</Price>
        <RequestButton onClick={() => handleOrder(name)}>
          Request {name}
        </RequestButton>
      </Card>
    </Container>
  );
}

const Card = styled.div`
  box-sizing: border-box;
  padding: 20px 40px 40px 40px;
  width: 45vw;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  box-shadow: 0px 2px 2px 1px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CloseButton = styled.img`
  border: none;
  background-color: transparent;
  font-size: large;
  cursor: pointer;
`;

const CloseButtonContainer = styled.div`
  margin: 10px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  height: auto;
  width: 350px;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.font};
  margin: 20px 0px 20px 0px;
  font-size: medium;
  text-align: center;
`;

const Price = styled(Description)`
  margin-top: 0px;
`;

const RequestButton = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.color};
  border-radius: 5px;
  font-family: ${({ theme }) => theme.font};
  text-align: center;
  font-size: large;
  box-sizing: border-box;
  padding: 10px 0px 10px 0px;
  cursor: pointer;
  color: white;
  transform: translateY(0px);
  box-shadow: 1px 1px 1px 1px lightgray;

  &:hover {
    transform: translateY(-1px);
  }
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
  backdrop-filter: blur(5px);
`;
