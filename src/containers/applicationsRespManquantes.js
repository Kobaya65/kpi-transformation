import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";
import { assignationsList } from "../components/utils";
import Bouton from "../components/bouton";

export default class ApplicationsRespManquantes extends Component {
  constructor(props) {
    super(props);
    this.changeBouton = this.changeBouton.bind(this);

    this.state = {
      applis: [],
      nbItems: 0,
      titreBandeau: "",
      nbCellulesVides: 0,
      bouton: "toutes",
    };
  }

  changeBouton(etat) {
    this.setState({ bouton: etat });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.props.match.path)
      .then((response) => {
        this.setState({ applis: response.data });
        this.setState({ nbItems: response.data.length });
        // appel fx pour compter le nombre d'infos manquantes
        const vides = this.compteCellulesVides();
        this.setState({ nbCellulesVides: vides });

        let applications = `${this.state.nbItems} application${
          this.state.nbItems > 1 ? "s" : ""
        }`;
        let infos = `, ${this.state.nbCellulesVides} info${
          this.state.nbCellulesVides > 1 ? "s" : ""
        } manquante${this.state.nbCellulesVides > 1 ? "s" : ""}`;
        this.setState({
          titreBandeau: `Applications avec responsabilités manquantes ( ${applications}${infos} )`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /**
   * travaille sur le tableau state.applis
   * @return  nombre d'infos manquantes pour toutes les applis
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

  applisList(monBouton) {
    let liste = this.state.applis.map(function (currentApp, keyMap) {
      return (
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
          <tr key={currentApp.id}>
            <td className="label-gras-mgl5" colSpan="2">
              #{keyMap + 1}&nbsp;
              {currentApp.app[0].LibelleCourt}
            </td>
            <td className="centrage-table label-gras-mgl5">
              id=
              {currentApp.id}
            </td>
            <td className="centrage-table label-gras-mgl5" colSpan="3">
              Global_id=
              {currentApp.global_id}
            </td>
          </tr>
          {assignationsList(currentApp.assignations, monBouton)}
        </table>
      );
    });

    return liste;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex">
          <BandeauTitre titre={this.state.titreBandeau} />
          <Bouton
            className="flex-lg-shrink-1"
            etat={this.state.bouton}
            changeBouton={this.changeBouton}
          />
        </div>
        <table className="table table-striped">
          <tbody>{this.applisList(this.state.bouton)}</tbody>
        </table>
      </div>
    );
  }
}
