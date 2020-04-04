import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Applications from "./components/applications";
import Application from "./components/application";
// import ApplicationsResp from "./components/applicationsResp";
// import ApplicationResp from "./components/applicationResp";

// import logo from "./logo.png";

class App extends Component {
  render() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-inverse sticky-top flex-md-nowrap app-header">
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
              {/* <li>
                <Link to="/application" className="style-color-accomsg">Application by Id</Link>
              </li> */}
            </ul>
          </div>

          {/* <div className="col-md-3">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/applicationsResp" className="style-color-accomsg">Applications Resp.</Link>
              </li>
              <li>
                <Link to="/applicationResp" className="style-color-accomsg">Appli. Resp. by Id</Link>
              </li>
            </ul>
          </div> */}
        </nav>

        <Route path="/applications" component={Applications} />
        {/* <Route path="/application" component={Application} /> */}
        {/* <Route path="/applicationsResp" component={ApplicationsResp} />
        <Route path="/applicationResp" component={ApplicationResp} /> */}
        
        <h1>Titre 1</h1>
        <p>paragraphe 1</p>
        <h1>Titre 2</h1>
        <p>paragraphe 1</p>
        <p>paragraphe 2</p>
        <h1>Titre 3</h1>
        <p>paragraphe 1</p>
        <h1>Titre 4</h1>
        <p>paragraphe 1</p>
        <h1>Titre 5</h1>
        <p>paragraphe 1</p>
        <h1>Titre 6</h1>
        <p>paragraphe 1</p>
        <h1>Titre 7</h1>
        <p>paragraphe 1</p>
        
        <div className="app-footer">
          <p>Pied de page</p>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;