import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";

export default class ApplicationRespById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemin: this.props.match.url,
      appli: {},
      assignations: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.chemin)
      .then((response) => {
        this.setState({ appli: response.data });
        this.setState({ assignations: response.data.assignations });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  assignationsList() {
    return this.state.assignations.map(function (assignation, key) {
      return (
        <tr key={key}>
          <td>{assignation.personne}</td>
          <td>{assignation.id_personne}</td>
          <td>{assignation.structure}</td>
          <td>{assignation.id_structure}</td>
          <td>{assignation.role}</td>
          <td>{assignation.id_role}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <BandeauTitre composant={"Application et ses responsabilités"} />
        <div className="row">
          <div className="col">
            <p className="label-gras">ID</p>
            {/* <textarea className="form-control" id="id" rows="1" name="id" value={this.state.appli.id}></textarea> */}
            <input type="text" readonly size="12" value={this.state.appli.id} />
          </div>
          <div className="col">
            <p className="label-gras">Global_id</p>
            <input
              type="text"
              readonly
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
