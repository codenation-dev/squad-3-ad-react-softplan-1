import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes/index";
import history from "./services/history";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
