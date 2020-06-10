import React, { Component } from "react";
import axios from "axios";

import AppliState from "../components/appliState";
import ElementAppli from "../components/elementAppli";
import HeadBand from "../components/headband";

export default class ApplicationById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.url,
      id: this.props.match.params.id,
      appli: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.state.url)
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
        <HeadBand title={`Application [${this.state.appli.LibelleCourt}]`} />
        <div className="row">
          <ElementAppli
            label="Libellé Court"
            value={this.state.appli.LibelleCourt}
          />
          <ElementAppli label="Nom Court" value={this.state.appli.NomCourt} />
        </div>

        <div className="row">
          <ElementAppli label="GlobalID" value={this.state.appli.GlobalID} />
          <ElementAppli
            label="TechnicalIdHexa"
            value={this.state.appli.TechnicalIdHexa}
          />
          <div className="col">
            <p className="label-bold-mgl5 center-image">État actuel</p>
            <div className="center-image frame">
              <AppliState etat={this.state.appli.CurrentState} />
            </div>
          </div>
        </div>

        <div className="row">
          <ElementAppli
            label="Commentaire"
            value={this.state.appli.Commentaire}
          />
        </div>
        <div className="row">
          <ElementAppli
            label="Authentification"
            value={this.state.appli.Authentification}
          />
          <ElementAppli label="Type Appli" value={this.state.appli.TypeAppli} />
        </div>

        <div className="row">
          <ElementAppli
            label="Date Début Prod"
            value={this.state.appli.DateDebutProd}
          />
          <ElementAppli
            label="Date Fin Prod"
            value={this.state.appli.DateFinProd}
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
