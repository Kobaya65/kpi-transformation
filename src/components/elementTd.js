import React from "react";
import alert from "../images/alert-triangle.svg";

/**
 * Display alert-triangle icon
 * if elem is an empty string or is null
 * @param {*} props.elem texte de la propriété
 */
const ElementTd = (props) => {
  let element = {};

  if (props.elem === "" || props.elem === null) {
    element = (
      <td>
        <img
          className="center-image"
          src={alert}
          title="donnée absente"
          alt="donnée absente"
          height={"30px"}
        />
      </td>
    );
  } else {
    element = <td>{props.elem}</td>;
  }

  return element;
};

export default ElementTd;
