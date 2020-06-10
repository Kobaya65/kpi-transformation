import React, { Component } from "react";
// import axios from "axios";

import HeadBand from "../components/headband";

export default class StatParType extends Component {
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
        <HeadBand title={"Répartition des applications par type"} />
        <div className="row"></div>
      </div>
    );
  }
}
