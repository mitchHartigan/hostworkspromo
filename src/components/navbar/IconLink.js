import React from "react";
import styled from "styled-components";

export const IconLink = (props) => {
  const { destination, iconSrc, iconAlt, children } = props;

  function redirect(destination) {
    window.location.href = destination;
  }

  return (
    <Container onClick={() => redirect(destination)}>
      <Icon src={iconSrc} alt={iconAlt} />
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0px 20px 0px 20px;
`;

const Icon = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  color: white;
`;
