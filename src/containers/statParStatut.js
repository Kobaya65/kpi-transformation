import React, { Component } from "react";
// import axios from "axios";
// import Chart from "chart.js";

import BandeauTitre from "../components/bandeau-titre";

export default class StatParStatut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemin: this.props.match.url,
      appli: {},
      assignations: [],
      libelleCourt: "",
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <BandeauTitre titre={"Répartition des applications par statut"} />
        <div className="row"></div>
      </div>
    );
  }
}
