import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";

export default class StatEvolutionAppliValide extends Component {
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
        <BandeauTitre titre={"Évolution des applications validées"} />
        <div className="row"></div>
      </div>
    );
  }
}
