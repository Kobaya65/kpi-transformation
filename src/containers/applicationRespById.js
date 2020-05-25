import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";
import ElementTd from "../components/elementTableau";

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

  assignationsList() {
    return this.state.assignations.map((assignation, key) => {
      if (this.decompteInfosManquantes(assignation)) {
        return (
          <tr key={key}>
            <ElementTd elem={assignation.personne} />
            <ElementTd elem={assignation.id_personne} />
            <ElementTd elem={assignation.structure} />
            <ElementTd elem={assignation.id_structure} />
            <ElementTd elem={assignation.role} />
            <ElementTd elem={assignation.id_role} />
          </tr>
        );
      } else {
        return <tr></tr>;
      }
    });
  }

  decompteInfosManquantes(assign) {
    let nbMissing = 0;

    nbMissing += assign.personne === "" ? 1 : 0;
    nbMissing += assign.id_personne === "" ? 1 : 0;
    nbMissing += assign.structure === "" ? 1 : 0;
    nbMissing += assign.id_structure === "" ? 1 : 0;
    nbMissing += assign.role === "" ? 1 : 0;
    nbMissing += assign.id_role === "" ? 1 : 0;

    return nbMissing;
  }

  render() {
    return (
      <div className="container-fluid">
        <BandeauTitre titre={"Application et ses responsabilités"} />
        <div className="row">
          <div className="col">
            <p className="label-gras">Nom</p>
            <input
              type="text"
              readOnly
              size="12"
              value={this.state.libelleCourt}
            />
          </div>
          <div className="col">
            <p className="label-gras">ID</p>
            <input type="text" readOnly size="12" value={this.state.appli.id} />
          </div>
          <div className="col">
            <p className="label-gras">Global_id</p>
            <input
              type="text"
              readOnly
              size="33"
              value={this.state.appli.global_id}
            />
          </div>
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
          <tbody>{this.assignationsList()}</tbody>
        </table>
      </div>
    );
  }
}
