import React from "react";
import styled from "styled-components";
import { Hamburger } from "./Hamburger";

import { TextLink } from "./TextLink";
import { IconLink } from "./IconLink";

export const Navbar = () => {
  return (
    <Container>
      <Hamburger />
      <Bar>
        <LinkContainer>
          <TextLinkContainer>
            <TextLink destination="/">Home</TextLink>
            <TextLink destination="/why-hostworks">Why Hostworks</TextLink>
            <TextLink destination="https://www.promoplace.com/hostworkspromo/contact.htm">
              Contact
            </TextLink>
            <TextLink destination="/">Blog</TextLink>
          </TextLinkContainer>
        </LinkContainer>
        <LinkContainer>
          <TextLink destination="mailto:sales@hostworkspromo.com">
            sales@hostworkspromo.com
          </TextLink>
          <IconLink
            iconSrc="LinkedIn.png"
            iconAlt="Linked In Logo"
            destination="https://www.linkedin.com/in/alexgoldberg/"
          />
        </LinkContainer>
      </Bar>
    </Container>
  );
};

const TextLinkContainer = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

const Container = styled.div`
  position: fixed;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  z-index: 999;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 15px;
  margin-top: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: black;

  @media (max-width: 1450px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 25vw;
  margin-top: 0px;
`;
