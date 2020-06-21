import React from "react";
import alert from "../images/alert-triangle.svg";

/**
 * Display content of property or alert-triangle icon
 * if the property is an empty string
 * @param {*} props elem texte de la propriété
 */
const ElementTd = (props) => {
  return props.elem === "" ? (
    <td>
      {/* <td style={{ textAlign: "center" }}> */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img
        src={alert}
        title={"donnée manquante"}
        alt={"donnée manquante"}
        height={"30px"}
      />
    </td>
  ) : (
    <td>{props.elem}</td>
  );
};

export default ElementTd;
