import React from "react";
import styled from "styled-components";

import { TextLink } from "components/navbar/TextLink";

export function Header() {
  return (
    <Container>
      <HeaderImg
        src="hostworkspromo_banner_logo.jpeg"
        alt="Hostworks Promo Icon"
      />
      <TextLink header destination="https://hostworkspromo.orders.com">
        {`Hostworks is designed to get you more booked nights ->`}
      </TextLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-shadow: 1px 1px 3px 1px lightgray;

  padding-top: 70px;
  padding-left: 80px;
  padding-bottom: 5px;

  @media (max-width: 1450px) {
    padding-top: 0px;
    padding-left: 0px;
    align-items: center;
  }

  @media (max-width: 800px) {
    padding-top: 80px;
  }
`;

const HeaderImg = styled.img`
  height: auto;
  width: 380px;

  @media (max-width: 1200px) {
    width: 350px;
  }
`;
