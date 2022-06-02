import React from "react";
import styled from "styled-components";
import { SearchBarLink } from "./SearchBarLink";

import { TextLink } from "./TextLink";

export const Navbar = (props) => {
  return (
    <Container>
      <Bar>
        <LinkContainer>
          <TextLink destination="/">Home</TextLink>
          <TextLink destination="https://www.hostworkspromo.com/why-hostworks.htm">
            Why Hostworks
          </TextLink>
          <TextLink destination="https://www.hostworkspromo.com/artupload.htm">
            Art and Upload
          </TextLink>
          <TextLink destination="https://www.hostworkspromo.com/contact.htm">
            Contact
          </TextLink>
          <SearchBarLink />
        </LinkContainer>
      </Bar>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  flex-direction: row;
  justify-content: center;
  width: 100%;
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
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  margin-top: -3px;
`;
