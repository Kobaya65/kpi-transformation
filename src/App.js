import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyRoutes from "./components/routes";

class App extends Component {
  render() {
    console.log("App started at " + Date());
    return (
      <Router>
        <div className="navbar navbar-expand-sm sticky-top flex-md-nowrap app-header charte-graphique-sg double-border">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/soc102c.png`}
              height="30em"
              className="d-inline-block align-top"
              alt="logo Société Générale"
            />
          </a>
          <div className="col-md-2 p-3">KPI Transformation</div>
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#1"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Consultation
              </a>
              <div className="dropdown-menu">
                <Link
                  className="style-color-accomsg dropdown-item"
                  to="/applications"
                >
                  Applications
                </Link>
                <Link
                  className="style-color-accomsg dropdown-item"
                  to="/applicationsResp"
                >
                  Applications Resp.
                </Link>
                <a className="dropdown-item" href="#2">
                  Applications bis
                </a>
              </div>
            </li>
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#3"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Anomalies
              </a>
              <div className="dropdown-menu">
                <Link
                  className="style-color-accomsg dropdown-item"
                  to="respManquantes"
                >
                  Application avec responsabilité manquante
                </Link>
              </div>
            </li>
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#4"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Statistiques
              </a>
              <div className="dropdown-menu">
                <Link
                  className="style-color-accomsg dropdown-item"
                  to="statistiques"
                >
                  Applications dans le cloud
                </Link>
              </div>
            </li>
          </ul>
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#5"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Administration
              </a>
              <div className="dropdown-menu">
                <Link
                  className="style-color-accomsg dropdown-item"
                  to="/createUser"
                >
                  Création d'un utilisateur
                </Link>
                <Link
                  className="style-color-accomsg dropdown-item"
                  to="/changePwd"
                >
                  Modification du mot de passe
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <MyRoutes />

        <footer className="footer charte-graphique-sg">
          <p className="center-v">Pied de page</p>
        </footer>
      </Router>
    );
  }
}

export default App;
