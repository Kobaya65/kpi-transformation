import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BandeauTitre from "../components/bandeau-titre";

export default class ApplicationsResp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemin: props.match.path,
      appli: [],
      nbItems: 0,
      titreBandeau: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.chemin)
      .then((response) => {
        this.setState({ appli: response.data });
        this.setState({ nbItems: response.data.length });
        this.setState({
          titreBandeau: `Applications et leurs responsabilités (${this.state.nbItems})`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  appliList() {
    return this.state.appli.map(function (currentApp) {
      return (
        <tr key={currentApp._id}>
          <td>{currentApp.id}</td>
          <td>
            <Link to={`/applicationsResp/${currentApp._id}`}>
              {currentApp.global_id}
            </Link>
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
              <th>Id</th>
              <th>Global_id</th>
            </tr>
          </thead>
          <tbody>{this.appliList()}</tbody>
        </table>
      </div>
    );
  }
}
