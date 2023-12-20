import React from "react";
import styled from "styled-components";

export default function Preview(props) {
  const { imgSrc, imgAlt, title, previewText } = props;

  return (
    <Container>
      <img src={imgSrc} alt={imgAlt} />
      <Title>{title}</Title>
      <Text>{previewText}</Text>
    </Container>
  );
}

const Title = styled.h1``;

const Text = styled.p``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
