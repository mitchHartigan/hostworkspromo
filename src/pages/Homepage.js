import React, { useState } from "react";
import Hero from "../components/hero/Hero.js";
import { Navbar } from "../components/navbar/Navbar.js";
import { ContentBlocks } from "../components/contentBlocks/index.js";

import { PrintOnDemand } from "../components/printOnDemand/PrintOnDemand.js";
import { GraphicsPackages } from "../components/graphicsPackages/GraphicsPackages.js";
import { Footer } from "../components/footer/Footer";
import Contact from "components/contact/index.js";

export default function Homepage() {
  const initialState = {
    interest: null,
  };

  const [state, setState] = useState(initialState);

  return (
    <>
      <Navbar />
      <Hero />
      <ContentBlocks />
      <PrintOnDemand />
      <GraphicsPackages />
      <Contact />
      <Footer />
    </>
  );
}
