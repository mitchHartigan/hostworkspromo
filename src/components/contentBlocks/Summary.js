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
  grid-template-columns: 10% 35% 10% 35% 10%;
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 8vh 0vw 8vh 0vw;

  @media (max-width: 1450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10vh 20px 10vh 20px;
  }

  @media (max-width: 900px) {
    padding: 30px 20px 30px 20px;
  }
`;

const ImageContainer = styled.div`
  grid-column: ${(props) => (props.swap ? "4 / 5" : "2 / 3")};
  align-self: center;
  justify-self: center;
  grid-row-start: 1;
`;

const Image = styled.img`
  @media (max-width: 1450px) {
    margin-bottom: 20px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const DescriptionContainer = styled.div`
  grid-column: ${(props) => (props.swap ? "2 / 3" : "4 / 5")};
  align-self: stretch;
  justify-self: center;
  grid-row-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1600px) {
    align-items: center;
    margin: 1vh 0px 1vh 0px;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  line-height: 28px;
  margin-top: 20px;

  @media (max-width: 1600px) {
    font-size: ${({ theme }) => theme.text.xs};
    max-width: 700px;
    text-align: center;
  }
`;
