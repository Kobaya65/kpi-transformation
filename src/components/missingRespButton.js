import React, { Component } from "react";

/**
 *
 * @param {*} props state : statut du bouton ("toutes" ou "manquantes")
 */
export default class MissingRespButton extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.changeButton(
      this.props.state === "toutes" ? "manquantes" : "toutes"
    );
  }

  render() {
    const buttonStyle = {
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
        style={buttonStyle}
        type="button"
        onClick={() => this.handleChange()}
        title={
          this.props.state === "toutes"
            ? "toutes les responsabilités"
            : "les responsablités manquantes"
        }
      >
        {this.props.state}
      </button>
    );
  }
}
