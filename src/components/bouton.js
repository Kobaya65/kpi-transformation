import React, { Component } from "react";

/**
 *
 * @param {*} props etat : statut du bouton ("toutes" ou "manquantes")
 */
export default class Bouton extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.changeBouton(
      this.props.etat === "toutes" ? "manquantes" : "toutes"
    );
  }

  render() {
    const boutonStyle = {
      border: "2px solid black",
      lineHeight: "2.5",
      padding: "0 5px 5px",
      fontSize: "1rem",
      textAlign: "center",
      color: "black",
      borderRadius: "10px",
      backgroundColor: "var(--accomSg)",
    };

    return (
      <button
        style={boutonStyle}
        type="button"
        onClick={() => this.handleChange()}
        title={
          this.props.etat === "toutes"
            ? "toutes les responsabilités"
            : "les responsablités manquantes"
        }
      >
        {this.props.etat}
      </button>
    );
  }
}
