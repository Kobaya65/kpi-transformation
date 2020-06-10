import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import applicationById from "./applicationById";
import AppliState from "../components/appliState";
import HeadBand from "../components/headband";

export default class ApplicationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.path,
      applis: [],
      nbItems: 0,
      title: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.url)
      .then((response) => {
        this.setState({ applis: response.data });
        this.setState({ nbItems: response.data.length });
        this.setState({ title: `Applications (${this.state.nbItems})` });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  appliList() {
    return this.state.applis.map(function (currentApp, keyMap) {
      return (
        <tr key={currentApp._id}>
          <td className="center-table">{keyMap + 1}</td>
          <td>
            <Link to={`/applications/${currentApp._id}`}>
              {currentApp.LibelleCourt}
            </Link>
          </td>
          <td>{currentApp.NomCourt}</td>
          <td>{currentApp.Commentaire}</td>
          <td className="center-table">
            <AppliState etat={currentApp.CurrentState} />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <HeadBand title={this.state.title} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Libellé court</th>
              <th>Nom court</th>
              <th>Commentaire</th>
              <th>État actuel</th>
            </tr>
          </thead>
          <tbody>{this.appliList()}</tbody>
        </table>

        <Route path="/applications/:_id" component={applicationById} />
      </div>
    );
  }
}
