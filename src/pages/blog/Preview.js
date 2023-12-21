import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

export default function Preview(props) {
  const { imgSrc, imgAlt, title, previewText, canonTitle } = props;

  return (
    <Container href={`/blog/${canonTitle}`}>
      <PreviewImage src={imgSrc} alt={imgAlt} />
      <Title>{title}</Title>
      <PreviewText>{previewText}</PreviewText>
    </Container>
  );
}

const PreviewImage = styled.img`
  height: auto;
  width: 600px;
`;

const Title = styled.h1``;

const PreviewText = styled.p``;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  box-shadow: 1px 1px 2px 1px lightgray;
  margin: 20px 0px 20px 0px;
  box-sizing: border-box;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
