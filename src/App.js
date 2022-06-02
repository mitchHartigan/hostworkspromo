import React from "react";
import { ThemeProvider } from "styled-components";

import Hero from "./components/Hero.js";
import { Navbar } from "./components/navbar/Navbar.js";

import { globalStyles } from "./globalStyles";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <>
        <Navbar />
        <Hero />
      </>
    </ThemeProvider>
  );
}

export default App;
