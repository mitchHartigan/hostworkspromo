import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Header } from "../components/contentBlocks/Header";
import { MarkdownLoader } from "../components/markdown/loader";

import WhyHostworksPath from "./WhyHostworks.md";

export default function WhyHostworks() {
  return (
    <>
      <Navbar />
      <Header />
      <MarkdownLoader path={WhyHostworksPath} />
    </>
  );
}
