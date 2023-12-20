import React from "react";
import styled from "styled-components";

import Preview from "./Preview";

import { manifest } from "./posts/postManifest";

export default function Blog() {
  return (
    <Container>
      <Title>Blog</Title>
      {manifest.map((blog) => {
        return <Preview key={blog.title} {...blog} />;
      })}
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
