import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyRoutes from "./routes/routes";
import TheMenu from "./components/theMenu";

class App extends Component {
  render() {
    console.log("App started at " + Date());
    return (
      <Router>
        <TheMenu />
        <MyRoutes />

        <footer className="footer graph-chart-sg">
          <p className="center-v">Pied de page</p>
        </footer>
      </Router>
    );
  }
}

export default App;
