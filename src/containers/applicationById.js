import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";
import EtatAppli from "../components/etatAppli";

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
    return this.state.appli.Concepts.map(function (concept, key) {
      return (
        <tr key={key}>
          <td>{concept.Nom}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <BandeauTitre composant="Application" />
        <div className="row">
          <div className="col">
            <p className="label-gras">Libellé Court</p>
            <input
              type="text"
              readonly
              size="20"
              value={this.state.appli.libelleCourt}
            />
          </div>
          <div className="col">
            <p className="label-gras">Nom Court</p>
            <input
              type="text"
              readonly
              size="30"
              value={this.state.appli.NomCourt}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="label-gras">GlobalID></p>
            <input
              type="text"
              readonly
              size="32"
              value={this.state.appli.GlobalID}
            />
          </div>
          <div className="col">
            <p className="label-gras">TechnicalIdHexa</p>
            <input
              type="text"
              readonly
              size="16"
              value={this.state.appli.TechnicalIdHexa}
            />
          </div>
          <div className="col">
            <p className="label-gras">État actuel</p>
            <EtatAppli
              // style={{ justifyConten: "center" }}
              etat={this.state.appli.CurrentState}
            />
          </div>
        </div>
        <div className="row">
          <div></div>
          <div className="col column-1-3">
            <p className="label-gras">Commentaire</p>
            <textarea
              type="text"
              // rows={this.state.appli.Commentaire.size}
              readonly
              style={{ width: "100%" }}
              value={this.state.appli.Commentaire}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="label-gras">Authentification</p>
            <input
              type="text"
              readonly
              size="25"
              value={this.state.appli.Authentification}
            />
          </div>
          <div className="col">
            <p className="label-gras">Type appli</p>
            <input
              type="test"
              readonly
              size="30"
              value={this.state.appli.TypeAppli}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="label-gras">Date Début Prod</p>
            <input
              type="text"
              readonly
              size="20"
              value={this.state.appli.DateDebutProd}
            />
          </div>
          <div className="col">
            <p className="label-gras">Date Fin Prod</p>
            <input
              type="text"
              readonly
              size="20"
              value={this.state.appli.DateFinProd}
            />
          </div>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Concept</th>
              </tr>
            </thead>
            {/* <tbody>{this.conceptsList()}</tbody> */}
          </table>
        </div>
      </div>
    );
  }
}
