import React, { useState } from "react";
import styled from "styled-components";

import { Title } from "../Title";
import { Package } from "./Package";
import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "../FadeIn";

const package1Data = {
  imgSrc: "graphics_1.png",
  imgAlt: "Eugene Oasis Business cards in circle.",
  name: "Graphics Package 1",
  linkTarget:
    "https://www.hostworkspromo.com/si/365452884/gp1/graphic-package-1",
};

const package2Data = {
  imgSrc: "graphics_2.png",
  imgAlt: "Eugene Oasis memo pad and pencil.",
  name: "Graphics Package 2",
  linkTarget:
    "https://www.hostworkspromo.com/si/595452897/gp2/graphic-package-2",
};

const package3Data = {
  imgSrc: "graphics_3.png",
  imgAlt: "Eugene Oasis graphics being designed on a laptop.",
  name: "Graphics Package 3",
  linkTarget:
    "https://www.hostworkspromo.com/si/395452899/gp3/graphic-package-3",
};

const package4Data = {
  imgSrc: "graphics_4.png",
  imgAlt: "Eugene Oasis graphics displayed on a laptop",
  name: "Superhost Starter Kit",
  linkTarget:
    "https://www.hostworkspromo.com/si/525452901/sh5s/super-host-5-star-starter-kit-",
};

export const GraphicsPackages = (props) => {
  const [visible, setVisible] = useState();

  return (
    <VisibilitySensor
      onChange={(visible) => {
        if (visible) setVisible(true);
      }}
    >
      <Container>
        <FadeIn delay="0" visible={visible}>
          <Title align="center" spanWidth="280px">
            Our Graphics Packages
          </Title>
        </FadeIn>
        <FadeIn delay="200" visible={visible}>
          <Text>A selection of graphics packages to choose from.</Text>
        </FadeIn>
        <FadeIn delay="400" visible={visible}>
          <PackagesContainer>
            <Package {...package1Data} />
            <Package {...package2Data} />
            <Package {...package3Data} />
            <Package {...package4Data} />
          </PackagesContainer>
        </FadeIn>
      </Container>
    </VisibilitySensor>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh 0vw 6vh 0vw;
`;

const PackagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;

  @media (max-width: 1450px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-align: center;
  margin-top: 20px;

  @media (max-width: 900px) {
    padding: 0px 20px 0px 20px;
  }
`;
