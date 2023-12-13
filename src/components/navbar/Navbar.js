import React from "react";
import styled from "styled-components";
import { Hamburger } from "./Hamburger";
import { IconLink } from "./IconLink";
import { SearchBarLink } from "./SearchBarLink";

import { TextLink } from "./TextLink";

export const Navbar = () => {
  return (
    <Container>
      <Hamburger />
      <Bar>
        <LinkContainer>
          <TextLinkContainer>
            <TextLink destination="/">Home</TextLink>
            <TextLink destination="https://www.promoplace.com/hostworkspromo/why-hostworks.htm">
              Why Hostworks
            </TextLink>
            <TextLink destination="https://www.promoplace.com/hostworkspromo/contact.htm">
              Contact
            </TextLink>
            <TextLink destination="/">Blog</TextLink>
          </TextLinkContainer>
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

const IconContainer = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
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
  align-items: center;
  width: 50%;
  margin-top: 0px;
`;
