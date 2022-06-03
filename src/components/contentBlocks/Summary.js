import React, { useState } from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

import { Title } from "../Title";
import { Button } from "../Button";
import { FadeIn } from "../FadeIn";

export const Summary = (props) => {
  const [visible, setVisible] = useState(false);
  const { swap, data } = props;

  const { imgSrc, imgAlt, title, description, buttonText, buttonLink } = data;

  return (
    <Container swap={swap}>
      <ImageContainer swap={swap}>
        <VisibilitySensor
          partialVisibility={true}
          minTopValue={300}
          onChange={(visible) => {
            if (visible) setVisible(true);
          }}
        >
          <FadeIn delay="0" visible={visible}>
            <Image src={imgSrc} alt={imgAlt} />
          </FadeIn>
        </VisibilitySensor>
      </ImageContainer>
      <DescriptionContainer swap={swap}>
        <FadeIn delay="0" visible={visible}>
          <Title align="flex-start" spanWidth="278px">
            {title}
          </Title>
        </FadeIn>
        <FadeIn delay="250" visible={visible}>
          <Text>{description}</Text>
        </FadeIn>
        <FadeIn delay="325" visible={visible}>
          <Button handleClick={() => (window.location.href = buttonLink)}>
            {buttonText}
          </Button>
        </FadeIn>
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
