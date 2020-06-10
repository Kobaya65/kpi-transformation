import React from "react";

const ElementTd = (props) => {
  return (
    <td className={props.elem === "" ? "border-red" : ""}>{props.elem}</td>
  );
};

export default ElementTd;
