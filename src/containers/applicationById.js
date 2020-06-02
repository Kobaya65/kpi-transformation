import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";
import EtatAppli from "../components/etatAppli";
import { valeurNonSpecifie } from "../components/fonctions";
import ElementAppli from "../components/elementAppli";

export default class ApplicationById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chemin: this.props.match.url,
      url: this.props.match.url,
      id: this.props.match.params.id,
      appli: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.chemin)
      .then((response) => {
        this.setState({ appli: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  conceptsList() {
    // tester la présence de concept
    if (this.state.appli.Concepts) {
      return this.state.appli.Concepts.map(function (concept, key) {
        return (
          <tr key={key}>
            <td>{concept.Nom}</td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <BandeauTitre
          titre={`Application [${this.state.appli.LibelleCourt}]`}
        />
        <div className="row">
          <ElementAppli
            label="Libellé Court"
            valeur={this.state.appli.LibelleCourt}
          />
          <ElementAppli label="Nom Court" valeur={this.state.appli.NomCourt} />
        </div>

        <div className="row">
          <ElementAppli label="GlobalID" valeur={this.state.appli.GlobalID} />
          <ElementAppli
            label="TechnicalIdHexa"
            valeur={this.state.appli.TechnicalIdHexa}
          />
          <div className="col">
            <p className="label-gras-mgl5 centrer-image">État actuel</p>
            <div className="centrer-image cadre">
              <EtatAppli
                etat={valeurNonSpecifie(this.state.appli.CurrentState)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <ElementAppli
            label="Commentaire"
            valeur={this.state.appli.Commentaire}
          />
        </div>
        <div className="row">
          <ElementAppli
            label="Authentification"
            valeur={this.state.appli.Authentification}
          />
          <ElementAppli
            label="Type Appli"
            valeur={this.state.appli.TypeAppli}
          />
        </div>

        <div className="row">
          <ElementAppli
            label="Date Début Prod"
            valeur={this.state.appli.DateDebutProd}
          />
          <ElementAppli
            label="Date Fin Prod"
            valeur={this.state.appli.DateFinProd}
          />
        </div>

        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Concepts</th>
              </tr>
            </thead>
            <tbody>{this.conceptsList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
