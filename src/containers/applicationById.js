import React, { Component } from "react";
import axios from "axios";

import BandeauTitre from "../components/bandeau-titre";

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

  render() {
    return (
      <div className="container">
        <BandeauTitre composant="Application" />
        <div className="row">
          <div className="col">
            <label htmlFor="libCourt">Libellé Court :</label>
            <textarea
              className="form-control"
              id="libCourt"
              rows="1"
              name="Libellé court"
              value={this.state.appli.LibelleCourt}
            ></textarea>
          </div>
          <div className="col">
            <label htmlFor="nomCourt">Nom Court :</label>
            <textarea
              className="form-control"
              id="nomCourt"
              rows="1"
              name="Nom court"
              value={this.state.appli.NomCourt}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="globalId">GlobalID :</label>
            <textarea
              className="form-control"
              id="globalId"
              rows="1"
              name="Global ID"
              value={this.state.appli.GlobalID}
            ></textarea>
          </div>
          <div className="col">
            <label htmlFor="techIdHexa">TechnicalIdHexa :</label>
            <textarea
              className="form-control"
              id="techIdHexa"
              rows="1"
              name="Technical ID Hexa"
              value={this.state.appli.TechnicalIdHexa}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="comment">Commentaire :</label>
            <textarea
              className="form-control"
              id="comment"
              rows="5"
              name="Commentaire"
              value={this.state.appli.Commentaire}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="authent">Authentification :</label>
            <textarea
              className="form-control"
              id="authent"
              rows="1"
              name="Authentification"
              value={this.state.appli.Authentification}
            ></textarea>
          </div>
          <div className="col">
            <label htmlFor="typeAppli">Type appli :</label>
            <textarea
              className="form-control"
              id="typeAppli"
              rows="1"
              name="Type Appli"
              value={this.state.appli.TypeAppli}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="dateDebut">Date Début Prod :</label>
            <textarea
              className="form-control"
              id="dateDebut"
              rows="1"
              name="Date debut Prod"
              value={this.state.appli.DateDebutProd}
            ></textarea>
          </div>
          <div className="col">
            <label htmlFor="dateFin">Date Fin Prod :</label>
            <textarea
              className="form-control"
              id="dateFin"
              rows="1"
              name="Date fin Prod"
              value={this.state.appli.DateFinProd}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}
