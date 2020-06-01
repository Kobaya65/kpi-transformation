import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BandeauTitre from "../components/bandeau-titre";

export default class ApplicationsResp extends Component {
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

        let applications = `${this.state.nbItems} application${
          this.state.nbItems > 1 ? "s" : ""
        }`;
        this.setState({
          titreBandeau: `Applications et leurs responsabilités ( ${applications} )`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  appliList() {
    let liste = this.state.applis.map(function (currentApp, keyMap) {
      return (
        <tr key={currentApp._id}>
          <td className="centrage-table">{keyMap + 1}</td>
          <td className="centrage-table">
            <Link to={`/applicationsResp/${currentApp._id}`}>
              {currentApp.app[0].LibelleCourt}
            </Link>
          </td>
          <td className="centrage-table">
            <Link to={`/applicationsResp/${currentApp._id}`}>
              {currentApp.global_id}
            </Link>
          </td>
        </tr>
      );
    });
    return liste;
  }

  render() {
    return (
      <div className="container-fluid">
        <BandeauTitre
          titre={this.state.titreBandeau}
          appelant={this.state.chemin}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Global_id</th>
            </tr>
          </thead>
          <tbody>{this.appliList()}</tbody>
        </table>
      </div>
    );
  }
}
