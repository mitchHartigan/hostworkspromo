import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

export default function Preview(props) {
  const { imgSrc, imgAlt, title, previewText, canonTitle, date } = props;

  return (
    <Container href={`/blog/${canonTitle}`}>
      <PreviewImage src={imgSrc} alt={imgAlt} />
      <Title>{title}</Title>
      <DateText>{date}</DateText>
      <PreviewText>{previewText}</PreviewText>
    </Container>
  );
}

const PreviewImage = styled.img`
  height: auto;
  width: 600px;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.lg};
`;

const PreviewText = styled.p`
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-align: center;
`;

const DateText = styled.h3`
  margin: 0px;
  font-weight: normal;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.sm};
  text-align: center;
`;

const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  box-shadow: 1px 1px 2px 1px lightgray;
  margin: 20px 0px 20px 0px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
