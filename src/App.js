import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { globalStyles } from "./globalStyles";

import Homepage from "./pages/Homepage";
import WhyHostworks from "./pages/WhyHostworks";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/why-hostworks">
            <WhyHostworks />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
