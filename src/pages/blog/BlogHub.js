import React from "react";
import styled from "styled-components";

import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

import Preview from "./Preview";
import { manifest } from "./posts/postManifest";

export default function BlogHub() {
  return (
    <Container>
      <Navbar />
      <Title>Blog</Title>
      {manifest.map((blog) => {
        return <Preview key={blog.title} {...blog} />;
      })}
      <Footer />
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
