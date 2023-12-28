import React from "react";
import styled from "styled-components";

export default function Modal(props) {
  const { show, content, setInterest, closeModal } = props;

  return (
    <Container show={show}>
      <Card>
        <button onClick={closeModal}>X</button>
      </Card>
    </Container>
  );
}

const Card = styled.div`
  width: 50vw;
  height: 75vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  box-shadow: 0px 2px 2px 1px lightgray;
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
