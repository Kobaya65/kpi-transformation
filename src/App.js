import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./containers/home";
import ApplicationsList from "./containers/applicationsList";
import ApplicationById from "./containers/applicationById";
import ApplicationsResp from './containers/applicationsResp';
import ApplicationRespById from './containers/applicationRespById';

class App extends Component {
  
  render() {
    console.log( 'App started at ' + Date() );
    return (
      <Router>
        <div className="render">
          <nav className="navbar sticky-top flex-md-nowrap app-header charte-graphique-sg double-border">
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
                  <Link to="applications" className="style-color-accomsg">Applications</Link>
                </li>
                <li>
                  <Link to="applicationsResp" className="style-color-accomsg">Applications Resp.</Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/applications" component={ApplicationsList} />
              <Route path="/applications/:_id" component={ApplicationById} />
              <Route exact path="/applicationsResp" component={ApplicationsResp} />
              <Route path="/applicationsResp/:_id" component={ApplicationRespById} />
            </Switch>
          </div>

          <footer className="footer charte-graphique-sg">
            <p className="center-v">Pied de page</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;