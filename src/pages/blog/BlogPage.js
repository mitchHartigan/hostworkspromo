import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { manifest } from "./posts/postManifest";
import { MarkdownLoader } from "components/markdown/loader";

export default function BlogPage() {
  const { canonTitle } = useParams();

  let data = null;

  data = manifest.find((blog) => {
    return blog.canonTitle === canonTitle;
  });

  if (data) {
    const { mdSrc } = data;

    return (
      <Page>
        <Navbar />
        <Container>
          <MarkdownLoader path={mdSrc} />
        </Container>
        <Footer />
      </Page>
    );
  }

  if (data === undefined) {
    return <p>Blog not found.</p>;
  }
}

const Container = styled.div`
  padding: 50px 200px 20px 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Page = styled.div``;
