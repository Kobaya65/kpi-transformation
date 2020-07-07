import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import HeadBand from "../components/headband";

export default class ApplicationsResp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.url,
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

        let applications = `${this.state.nbItems} application${
          this.state.nbItems > 1 ? "s" : ""
        }`;
        this.setState({
          title: `Applications et leurs responsabilités ( ${applications} )`,
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
          <td className="center-table">{keyMap + 1}</td>
          <td className="center-table">
            <Link to={`/applicationsResp/${currentApp._id}`}>
              {currentApp.app[0].LibelleCourt}
            </Link>
          </td>
          <td className="center-table">
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
        <HeadBand title={this.state.title} appelant={this.state.url} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Libellé Court</th>
              <th>Global_id</th>
            </tr>
          </thead>
          <tbody>{this.appliList()}</tbody>
        </table>
      </div>
    );
  }
}
