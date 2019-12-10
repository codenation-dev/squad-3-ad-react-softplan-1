import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes/Routes";
import history from "./services/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
