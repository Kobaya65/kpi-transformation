import React, { Component } from "react";
import axios from "axios";

import MyChart from "../components/myChart";
import HeadBand from "../components/headband";
import { perimeterList } from "../components/utils";

export default class StatEvolutionAppliValide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.url,
      data: [],
    };
  }

  eachPerimeterGraph() {
    if (this.state.data.length > 0) {
      const theList = perimeterList(this.state.data);
      console.log("theList = " + theList);
      let subPerimeter;

      theList.forEach((element) => {
        subPerimeter = [];
        for (let index = 0; index < this.state.data.length; index++) {
          const elem = this.state.data[index];
          if (elem.Perimetre === element) {
            subPerimeter.push(elem);
          }
        }
        console.log("element = " + element);
        return <MyChart chartType="line" data={subPerimeter} title={element} />;
      });
    }
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
        {this.eachPerimeterGraph()}
      </div>
    );
  }
}
