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
      nbCellulesVides: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.chemin)
      .then((response) => {
        this.setState({ appli: response.data });
        this.setState({ nbItems: response.data.length });
        // appel fx pour compter le nombre d'infos manquantes
        const vides = this.compteCellulesVides();
        this.setState({ nbCellulesVides: vides });

        let applications = `${this.state.nbItems} application${
          this.state.nbItems > 1 ? "s" : ""
        }`;
        let infos = "";
        infos =
          this.state.chemin === "/respManquantes"
            ? `, ${this.state.nbCellulesVides} info${
                this.state.nbCellulesVides > 1 ? "s" : ""
              } manquante${this.state.nbCellulesVides > 1 ? "s" : ""}`
            : "";
        // afficher infos seulement si appel depuis le menu Anomalies/Application avec responsablité manquante
        this.setState({
          titreBandeau: `Applications et leurs responsabilités ( ${applications} ${infos} )`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  compteCellulesVides() {
    let nbCells = 0;

    this.state.appli.forEach((element) => {
      for (let assign = 0; assign < element.assignations.length; assign++) {
        if (element.assignations[assign].personne === "") nbCells++;
        if (element.assignations[assign].id_personne === "") nbCells++;
        if (element.assignations[assign].structure === "") nbCells++;
        if (element.assignations[assign].id_structure === "") nbCells++;
        if (element.assignations[assign].role === "") nbCells++;
        if (element.assignations[assign].id_role === "") nbCells++;
      }
    });
    return nbCells;
  }

  appliList() {
    let liste = this.state.appli.map(function (currentApp) {
      return (
        <tr key={currentApp._id}>
          <td>{currentApp.id}</td>
          <td>
            <Link to={`/applicationsResp/${currentApp._id}`}>
              {currentApp.global_id}
            </Link>
          </td>
          <td>{currentApp.app[0].LibelleCourt}</td>
        </tr>
      );
    });
    return liste;
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
              <th>Nom</th>
            </tr>
          </thead>
          <tbody>{this.appliList()}</tbody>
        </table>
      </div>
    );
  }
}
