import React from "react";
import styled from "styled-components";

export default function Preview(props) {
  const { imgSrc, altText, title, previewText } = props;
  return (
    <Container>
      <img src={imgSrc} alt={altText} height="auto" width="500px" />
      <Title>{title}</Title>
      <Text>{previewText}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
