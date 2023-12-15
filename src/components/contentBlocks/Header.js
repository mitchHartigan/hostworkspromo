import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <Container>
      <img
        src="hostworkspromo_banner_logo.jpeg"
        alt="Hostworks Promo Icon"
        height="auto"
        width="520px"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 60px;
  padding-left: 80px;

  @media (max-width: 1450px) {
    padding-top: 0px;
    padding-left: 0px;
  }
`;
