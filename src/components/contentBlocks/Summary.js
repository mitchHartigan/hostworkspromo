import React from "react";
import styled from "styled-components";

import { Title } from "../Title";
import { Button } from "../Button";

export const Summary = (props) => {
  const { swap, data } = props;

  const { imgSrc, imgAlt, title, description, buttonText, buttonLink } = data;

  return (
    <Container swap={swap}>
      <ImageContainer swap={swap}>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageContainer>
      <DescriptionContainer swap={swap}>
        <Title align="flex-start" spanWidth="278px">
          {title}
        </Title>
        <Text>{description}</Text>
        <Button handleClick={() => (window.location.href = buttonLink)}>
          {buttonText}
        </Button>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.swap ? "22% 32% 10% 16% 20%" : "10% 35% 7% 39% 9%"};
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 10vh 0vw 10vh 0vw;
`;

const ImageContainer = styled.div`
  grid-column: ${(props) => (props.swap ? "4 / 5" : "2 / 3")};
  align-self: end;
  justify-self: start;
  grid-row-start: 1;
`;

const Image = styled.img``;

const DescriptionContainer = styled.div`
  grid-column: ${(props) => (props.swap ? "2 / 3" : "4 / 5")};
  align-self: stretch;
  justify-self: center;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  line-height: 28px;
  margin-top: 20px;
`;
