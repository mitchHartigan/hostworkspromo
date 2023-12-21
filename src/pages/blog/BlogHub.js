import React from "react";
import styled from "styled-components";

import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

import Preview from "./Preview";
import { manifest } from "./posts/postManifest";
import { Header } from "components/contentBlocks/Header";

export default function BlogHub() {
  return (
    <Page>
      <Navbar />
      <Header />
      <Container>
        <Title>Blog</Title>
        {manifest.map((blog) => {
          return <Preview key={blog.title} {...blog} />;
        })}
      </Container>
      <Footer />
    </Page>
  );
}

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font};
  font-weight: normal;
  text-align: center;
  margin: 20px 0px 10px 0px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Container = styled.div`
  padding: 10px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
