import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";
import ApplicationsList from "./components/applicationsList";
import ApplicationById from "./components/applicationById";
import ApplicationsResp from "./components/applicationsResp";
import ApplicationRespById from "./components/applicationRespById";

class App extends Component {
  
  render() {
  console.log( 'App started at ' + Date() );
  return (
    <Router>
      <div className="render">
        <nav className="navbar sticky-top flex-md-nowrap app-header header-display double-border">
          <div className="col-md-2">
            <a href="/">
              <img src={`${ process.env.PUBLIC_URL }/images/soc102c.png`} height="30em" className="d-inline-block align-top" alt="logo Société Générale" />
            </a>
          </div>
          <div className="col-md-3 p-2">
            KPI Transformation
          </div>

          <div className="col-md-3">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/applications" className="style-color-accomsg">Applications</Link>
              </li>
              <li>
                <Link to="/applicationById"  className="style-color-accomsg">Application by Id</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/applicationsResp" className="style-color-accomsg">Applications Resp.</Link>
              </li>
              <li>
                <Link to="/applicationRespById" className="style-color-accomsg">Appli. Resp. by Id</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <Route exact path="/" component={Home} />
          <Route exact path="/applications" component={ApplicationsList} />
          <Route path="/applicationsById" component={ApplicationById} />
          <Route exact path="/applicationsResp" component={ApplicationsResp} />
          <Route path="/applicationRespById" component={ApplicationRespById} />
        </div>

        <footer className="footer header-display simple-border">
          <p className="center-v">Pied de page</p>
        </footer>
      </div>
    </Router>
  );
  }
}

export default App;