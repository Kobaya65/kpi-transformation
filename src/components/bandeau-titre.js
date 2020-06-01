import React, { Component } from "react";
import Bouton from "./bouton";

/**
 * @param {*} props.titre     texte à afficher dans le bandeau
 * @param {*} props.appelant  composant appelant
 * @param {*} props.bouton    bouton bascule (TOUTES || MANQUANTES) à afficher dans le bandeau
 *                            pour choisir entre liste complète des responsabilités
 *                            ou seulement celles où il manque au moins une info
 */
export default class BandeauTitre extends Component {
  render() {
    if (this.props.appelant === "/respManquantes") {
      return (
        <div className="d-flex">
          <h5 className="bandeau-titre p-2 flex-grow-1">{this.props.titre}</h5>
          <Bouton texte={this.props.bouton} />
        </div>
      );
    }
    return <h5 className="bandeau-titre">{this.props.titre}</h5>;
  }
}
