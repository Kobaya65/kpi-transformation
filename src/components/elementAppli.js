import React, { Component } from "react";

/**
 * Display a single information for an application.
 * Apply the css class frame to simulate a 3D textbox.
 * If the value is a empty string, display "non spécifié" and apply the css class missing-value.
 *
 * @param {*} props.label label of the field
 * @param {*} props.value value of the element
 */
export default class ElementAppli extends Component {
  render() {
    return (
      <div className="col">
        <p className="label-bold-mgl5">{this.props.label}</p>
        <div
          className={this.props.value === "" ? "frame missing-value" : "frame"}
        >
          {this.props.value === "" ? "non spécifié" : this.props.value}
        </div>
      </div>
    );
  }
}
