import React from "react";
import styled from "styled-components";

export const TextLink = (props) => {
  const { children, destination, menu } = props;

  return (
    <Container menu={menu}>
      <Text
        href={destination}
        target={children === "Art and Upload" ? "_blank" : ""}
        menu={menu}
      >
        {children}
      </Text>
    </Container>
  );
};

const Text = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  color: ${(props) => (props.menu ? "black" : "white")};
  cursor: pointer;
  text-decoration: none;
`;

const Container = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.menu ? "flex-start" : "center")};
  align-items: center;
`;
