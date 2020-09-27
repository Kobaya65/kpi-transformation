import React, { Component } from "react";
import axios from "axios";

import HeadBand from "../components/headband";
import MyChart from "../components/myChart";
import { createDatasetPie } from "../components/utils";

export default class StatByStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.url,
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.url)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <HeadBand title={"Répartition des applications par statut"} />
        <MyChart chartType="pie" data={createDatasetPie(this.state.data)} />
      </div>
    );
  }
}
