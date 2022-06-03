import React from "react";
import styled from "styled-components";

export const Package = (props) => {
  const { imgSrc, imgAlt, name, linkTarget } = props;

  function redirect(destination) {
    window.location.href = destination;
  }

  return (
    <Container onClick={() => redirect(linkTarget)}>
      <Image src={imgSrc} alt={imgAlt} />
      <Text>{name}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 2vw 0vh 2vw;
  cursor: pointer;
`;

const Image = styled.img`
  &:hover {
    transform: scale(1.01);
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-align: center;
  margin-top: 20px;
`;
