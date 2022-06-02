import React from "react";
import { ThemeProvider } from "styled-components";

import Hero from "./components/hero/Hero.js";
import { Navbar } from "./components/navbar/Navbar.js";
import { ContentBlocks } from "./components/contentBlocks/index.js";

import { globalStyles } from "./globalStyles";
import { PrintOnDemand } from "./components/printOnDemand/PrintOnDemand.js";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <>
        <Navbar />
        <Hero />
        <ContentBlocks />
        <PrintOnDemand />
      </>
    </ThemeProvider>
  );
}

export default App;
