import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ApplicationsList from "./components/applications";
import Application from "./components/application";
import ApplicationsResp from "./components/applicationsResp";
import ApplicationResp from "./components/applicationResp";

class App extends Component {
    
  render() {
    console.log( 'Front end started at ' + Date() );
  return (
    <Router>
      <div className="render">
        <nav className="navbar sticky-top flex-md-nowrap app-header menu-display">
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
                <Link to="/application" className="style-color-accomsg">Application by Id</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/applicationsResp" className="style-color-accomsg">Applications Resp.</Link>
              </li>
              <li>
                <Link to="/applicationResp" className="style-color-accomsg">Appli. Resp. by Id</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <Route path="/" exact component={ApplicationsList} />
          <Route path="/applications" exact  component={ApplicationsList} />
          <Route path="/application" exact component={Application} />
          <Route path="/applicationsResp" exact component={ApplicationsResp} />
          <Route path="/applicationResp" exact component={ApplicationResp} />
          
          {/* <h1> Titre 1</h1>
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
          <p>paragraphe 1</p> */}
        </div>

        <footer className="footer menu-display">
          <p>Pied de page</p>
        </footer>
      </div>
    </Router>
  );
  }
}

export default App;