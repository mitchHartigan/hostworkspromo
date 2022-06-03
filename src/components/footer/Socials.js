import React from "react";
import styled from "styled-components";

export const Socials = (props) => {
  function redirect(destination) {
    window.location.href = destination;
  }

  return (
    <Container>
      <ImageLink
        src="linkedin.png"
        onClick={() => redirect("https://www.linkedin.com/in/alexgoldberg/")}
      />
      <ImageLink
        src="RSS.png"
        onClick={() => redirect("https://www.watchdesign.com/")}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const ImageLink = styled.img`
  margin: 0px 7px 0px 7px;
  cursor: pointer;
`;
