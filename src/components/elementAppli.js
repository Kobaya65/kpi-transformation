import React, { Component } from "react";

/**
 *
 * @param {*} props value the value of the element
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
