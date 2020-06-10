import React, { Component } from "react";
// import axios from "axios";
// import Chart from "chart.js";

import HeadBand from "../components/headband";

export default class StatParStatut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.url,
      appli: {},
      assignations: [],
      shortName: "",
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <HeadBand title={"Répartition des applications par statut"} />
        <div className="row"></div>
      </div>
    );
  }
}
