import React from "react";
import styled from "styled-components";

export const TextLink = (props) => {
  const { children, destination, menu } = props;

  function redirect(destination) {
    window.location.href = destination;
  }

  return (
    <Container menu={menu} onClick={() => redirect(destination)}>
      <Text menu={menu}>{children}</Text>
    </Container>
  );
};

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  color: ${(props) => (props.menu ? "black" : "white")};
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.menu ? "flex-start" : "center")};
  align-items: center;
`;
