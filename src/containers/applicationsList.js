import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import applicationById from "./applicationById";
import BandeauTitre from "../components/bandeau-titre";
import EtatAppli from "../components/etatAppli";

export default class ApplicationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemin: props.match.path,
      applis: [],
      nbItems: 0,
      titreBandeau: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.chemin)
      .then((response) => {
        this.setState({ applis: response.data });
        this.setState({ nbItems: response.data.length });
        this.setState({ titreBandeau: `Applications (${this.state.nbItems})` });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  appliList() {
    return this.state.applis.map(function (currentApp) {
      return (
        <tr key={currentApp._id}>
          <td>
            <Link to={`/applications/${currentApp._id}`}>
              {currentApp.LibelleCourt}
            </Link>
          </td>
          <td>{currentApp.NomCourt}</td>
          <td>{currentApp.Commentaire}</td>
          <td>
            <EtatAppli etat={currentApp.CurrentState} />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <BandeauTitre titre={this.state.titreBandeau} />
        <table className="table table-striped">
          <thead>
            <tr>
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
