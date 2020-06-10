import React, { Component } from "react";
import axios from "axios";

import HeadBand from "../components/headband";
import { assignationsList } from "../components/utils";
import ElementRespAppli from "../components/elementRespAppli";

export default class ApplicationRespById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.url,
      appli: {},
      assignations: [],
      shortName: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.url)
      .then((response) => {
        this.setState({ appli: response.data[0] });
        this.setState({ assignations: response.data[0].assignations });
        this.setState({ shortName: response.data[0].app[0].LibelleCourt });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <HeadBand title={"Application et ses responsabilités"} />
        <div className="row">
          <ElementRespAppli label="Nom" value={this.state.shortName} />
          <ElementRespAppli label="ID" value={this.state.appli.id} />
          <ElementRespAppli
            label="Global_id"
            value={this.state.appli.global_id}
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
          <tbody>
            {assignationsList("", this.state.assignations, "toutes", 1)}
          </tbody>
        </table>
      </div>
    );
  }
}
