import React from "react";
import styled from "styled-components";

export const TextLink = (props) => {
  const { children, destination, menu, header } = props;

  return (
    <Container menu={menu} header={header}>
      <Text
        href={destination}
        target={children === "Art and Upload" ? "_blank" : ""}
        menu={menu}
        header={header}
      >
        {children}
      </Text>
    </Container>
  );
};

const Text = styled.a`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme, header }) => (header ? theme.text.md : theme.text.sm)};
  color: ${(props) => (props.menu ? "black" : "white")};
  ${({ header }) => header && "color: #0000EE;"}
  cursor: pointer;
  text-decoration: none;
  margin: 0px 25px 0px 25px;
`;

const Container = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.menu ? "flex-start" : "center")};
  align-items: center;
`;
