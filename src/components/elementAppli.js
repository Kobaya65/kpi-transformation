import React, { Component } from "react";
import { valeurNonSpecifie } from "./fonctions";

export default class ElementAppli extends Component {
  render() {
    return (
      <div className="col">
        <p className="label-gras-mgl5">{this.props.label}</p>
        <div
          className={
            this.props.valeur === "" ? "cadre valeur-manquante" : "cadre"
          }
        >
          {valeurNonSpecifie(this.props.valeur)}
        </div>
      </div>
    );
  }
}
