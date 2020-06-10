import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";
import { assignationsList } from "../components/utils";
import ElementRespAppli from "../components/elementRespAppli";

export default class ApplicationRespById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemin: this.props.match.url,
      appli: {},
      assignations: [],
      libelleCourt: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.chemin)
      .then((response) => {
        this.setState({ appli: response.data[0] });
        this.setState({ assignations: response.data[0].assignations });
        this.setState({ libelleCourt: response.data[0].app[0].LibelleCourt });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <BandeauTitre
          titre={"Application et ses responsabilités"}
          bouton="toutes"
        />
        <div className="row">
          <ElementRespAppli label="Nom" valeur={this.state.libelleCourt} />
          <ElementRespAppli label="ID" valeur={this.state.appli.id} />
          <ElementRespAppli
            label="Global_id"
            valeur={this.state.appli.global_id}
          />
        </div>

        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Personne</th>
              <th>ID Personne</th>
              <th>Structure</th>
              <th>ID Structure</th>
              <th>Role</th>
              <th>ID Role</th>
            </tr>
          </thead>
          <tbody>{assignationsList(this.state.assignations, "toutes")}</tbody>
        </table>
      </div>
    );
  }
}
