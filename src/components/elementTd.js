import React from "react";
import alert from "../images/alert-triangle.svg";

/**
 * Display content of property or alert-triangle icon
 * if the property is an empty string or is null
 * @param {*} props elem texte de la propriété
 */
const ElementTd = (props) => {
  let element = {};

  if (props.elem === "" || props.elem === null) {
    element = (
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
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
