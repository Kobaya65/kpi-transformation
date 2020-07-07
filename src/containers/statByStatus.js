import React, { Component } from "react";
// import axios from "axios";
// import Chart from "chart.js";

import HeadBand from "../components/headband";

export default class StatByStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.url,
      appli: {},
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
