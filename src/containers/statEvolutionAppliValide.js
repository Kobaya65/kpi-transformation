import React, { Component } from "react";
import axios from "axios";

import MyChart from "../components/myChart";
import HeadBand from "../components/headband";
import { createDatasetLine } from "../components/utils";

export default class StatEvolutionAppliValide extends Component {
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
        <HeadBand title={"Évolution des applications validées par périmètre"} />
        <MyChart
          chartType="line"
          data={createDatasetLine(this.state.data)}
          // width="200"
          // heigth="200"
        />
      </div>
    );
  }
}
