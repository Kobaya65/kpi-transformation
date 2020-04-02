import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import ApplicationsList from "./components/applications-list";

// import logo from "./logo.png";

class App extends Component {
  render() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-inverse sticky-top flex-md-nowrap app-header">
          <div className="col-md-2">
            <a href="#">
              <img src={`${ process.env.PUBLIC_URL }/images/societe-generale-logo-blanc.png`} height="30em" className="d-inline-block align-top" alt="logo Société Générale" />
            </a>
          </div>
          <div className="col-md-3 p-2">
            KPI Transformation
          </div>

          <div className="col-md-3">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="style-color-accomsg">Applications List</Link>
              </li>
              <li>
                <Link to="/" className="style-color-accomsg">Concepts List</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/" className="style-color-accomsg">Appli. Resp. List</Link>
              </li>
              <li>
                <Link to="/" className="style-color-accomsg">...</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          </a>
          <Link to="/" className="navbar-brand">KPI Transformation</Link>
        </nav> */}
        <br />
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        <h1>Titre</h1>
        <p>paragraphe</p>
        {/* <Route path="/" exact component={ApplicationsList} /> */}

        <div className="row app-footer">
          <p>Pied de page</p>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;