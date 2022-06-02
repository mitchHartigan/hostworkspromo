import React from "react";
import styled from "styled-components";

export const TextLink = (props) => {
  const { children, destination } = props;

  function redirect(destination) {
    window.location.href = destination;
  }

  return (
    <Container onClick={() => redirect(destination)}>
      <Text>{children}</Text>
    </Container>
  );
};

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  color: white;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
