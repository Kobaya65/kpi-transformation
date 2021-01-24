import React from "react";
import MyLink from "./link";

const TheMenu = () => {
  return (
    <div className="navbar navbar-expand-sm sticky-top app-header graph-chart-sg double-border">
      <a className="navbar-brand" href="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/soc102c.png`}
          height="30em"
          className="d-inline-block align-top"
          alt="logo Société Générale"
          title="page d'accueil"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="navbar-toggler-icon logo-menu">==</div>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <div>KPI Transformation</div>
        <ul className="navbar-nav nav-pills" style={{ margin: "0 5px" }}>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#1"
              data-toggle="dropdown"
            >
              Consultation
            </a>
            <div className="dropdown-menu">
              <MyLink nom="Applications" vers="/applications" />
              <MyLink nom="Applications Resp." vers="/applicationsResp" />
              {/* <MyLink
                nom="Applications filtrées"
                vers="/applicationsParFiltre"
              /> */}
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#2"
              data-toggle="dropdown"
            >
              Anomalies
            </a>
            <div className="dropdown-menu">
              <MyLink
                nom="Application avec responsabilité manquante"
                vers="/respManquantes"
              />
              <MyLink
                nom="Applications avec cycle de vie manquant"
                vers="/cycleVieManquant"
              />
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#3"
              data-toggle="dropdown"
            >
              Statistiques
            </a>
            <div className="dropdown-menu">
              <MyLink nom="Répartition par statut" vers="/statByStatus" />
              <MyLink nom="Répartition par type" vers="/statByType" />
              <MyLink
                nom="Évolution du nombre d'applications validées"
                vers="/statEvolutionAppliValide"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheMenu;
