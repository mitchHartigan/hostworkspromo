import React from "react";
import styled from "styled-components";

import { Button } from "../Button";

export const HeroCopy = (props) => {
  function handleRedirect() {
    const locationStr = "https://www.hostworkspromo.com/why-hostworks.htm";
    window.location.href = locationStr;
  }

  return (
    <Container>
      <TitleContainer>
        <Title src="full_name_logo.svg" alt="Full name logo." />
        <Subtitle>Elevate the guest experience.</Subtitle>
        <Button handleClick={handleRedirect}>Find out how</Button>
      </TitleContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10vw;
  margin-top: -11vh;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.img`
  filter: drop-shadow(2px 5px 2px rgb(0, 0, 0, 0.4));
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.lg};
  font-weight: 400;
`;

// const Button = styled.button`
//   margin-top: 10px;
//   padding: 5px 20px 5px 20px;
//   background-color: white;
//   font-family: ${({ theme }) => theme.font};
//   font-size: ${({ theme }) => theme.text.md};
//   font-weight: 500;
//   border-radius: 10px;
//   border: none;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   cursor: pointer;
// `;
