import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BandeauTitre from "../components/bandeau-titre";

export default class ApplicationsRespManquantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemin: props.match.path,
      applis: [],
      nbItems: 0,
      titreBandeau: "",
      nbCellulesVides: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.chemin)
      .then((response) => {
        this.setState({ applis: response.data });
        this.setState({ nbItems: response.data.length });
        // appel fx pour compter le nombre d'infos manquantes
        const vides = this.compteCellulesVides();
        this.setState({ nbCellulesVides: vides });

        let applications = `${this.state.nbItems} application${
          this.state.nbItems > 1 ? "s" : ""
        }`;
        let infos = `, ${this.state.nbCellulesVides} 
          info${this.state.nbCellulesVides > 1 ? "s" : ""}
          manquante${this.state.nbCellulesVides > 1 ? "s" : ""}`;
        this.setState({
          titreBandeau: `Applications avec responsabilités manquantes ( ${applications} ${infos} )`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /**
   * travaille sur le state applis
   * @return  nombre d'infos manquantes pour l'appli
   */
  compteCellulesVides() {
    let nbCells = 0;

    this.state.applis.forEach((appli) => {
      for (let assign = 0; assign < appli.assignations.length; assign++) {
        if (appli.assignations[assign].personne === "") nbCells++;
        if (appli.assignations[assign].id_personne === "") nbCells++;
        if (appli.assignations[assign].structure === "") nbCells++;
        if (appli.assignations[assign].id_structure === "") nbCells++;
        if (appli.assignations[assign].role === "") nbCells++;
        if (appli.assignations[assign].id_role === "") nbCells++;
      }
    });
    return nbCells;
  }

  appliList() {
    let liste = this.state.applis.map(function (currentApp) {
      return (
        <tr key={currentApp._id}>
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
        <BandeauTitre titre={this.state.titreBandeau} bouton={true} />
        <table className="table table-striped">
          <thead>
            <tr>
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
