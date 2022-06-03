import React from "react";
import { ThemeProvider } from "styled-components";

import Hero from "./components/hero/Hero.js";
import { Navbar } from "./components/navbar/Navbar.js";
import { ContentBlocks } from "./components/contentBlocks/index.js";

import { globalStyles } from "./globalStyles";
import { PrintOnDemand } from "./components/printOnDemand/PrintOnDemand.js";
import { GraphicsPackages } from "./components/graphicsPackages/GraphicsPackages.js";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <>
        <Navbar />
        <Hero />
        <ContentBlocks />
        <PrintOnDemand />
        <GraphicsPackages />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
