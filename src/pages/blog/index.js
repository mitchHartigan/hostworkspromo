import React from "react";
import styled from "styled-components";

export default function Blog() {
  return (
    <Container>
      <Title>Blog</Title>
      <Preview data={} />
      <Preview data={} />
    </Container>
  );
}

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
