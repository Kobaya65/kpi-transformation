import React from "react";

const ElementTd = (props) => {
  return (
    <td className={props.elem === "" ? "bord-rouge" : ""}>{props.elem}</td>
  );
};

export default ElementTd;
