import React from "react";
import styled from "styled-components";

export const IconLink = (props) => {
  const { destination, iconSrc, iconAlt } = props;

  function redirect(destination) {
    window.location.href = destination;
  }

  return (
    <Container href={destination}>
      <Icon src={iconSrc} alt={iconAlt} />
    </Container>
  );
};

const Container = styled.a`
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
