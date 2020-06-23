import React, { Component } from "react";
import axios from "axios";

import HeadBand from "../components/headband";
import { cyclesList } from "../components/utils";

export default class ApplicationsCyclesManquants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applis: [],
      nbItems: 0,
      title: "",
    };
  }

  applisList() {
    let theList = this.state.applis.map(function (currentApp, key) {
      return cyclesList(
        currentApp.LibelleCourt,
        currentApp.CurrentState,
        currentApp.CycleDeVie,
        key
      );
    });

    return theList;
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.props.match.path)
      .then((response) => {
        this.setState({ applis: response.data });
        this.setState({ nbItems: response.data.length });

        let applications = `${this.state.nbItems} application${
          this.state.nbItems > 1 ? "s" : ""
        }`;
        this.setState({
          title: `${applications} avec cycle de vie non conforme`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex">
          <HeadBand title={this.state.title} />
        </div>
        <table className="table" id="table-resp-manquantes">
          <thead>
            <tr>
              <th>Libellé court</th>
              <th>Etat actuel</th>
              <th>Nom du cycle</th>
              <th>Date de début</th>
              <th>Date de fin</th>
            </tr>
          </thead>
          <tbody>{this.applisList()}</tbody>
        </table>
      </div>
    );
  }
}
