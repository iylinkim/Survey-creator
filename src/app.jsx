import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Complete from "./routes/Complete";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/complete">
        <Complete />
      </Route>
    </Router>
  );
}

export default App;
