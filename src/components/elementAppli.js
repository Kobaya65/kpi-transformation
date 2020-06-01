import React, { Component } from "react";
import { valeurNonSpecifie } from "./fonctions";

export default class ElementAppli extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col">
        <p className="label-gras">{this.props.label}</p>
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
