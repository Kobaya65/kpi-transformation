import React from "react";

const ElementRespAppli = (props) => {
  return (
    <div className="col cadre" style={{ margin: "10px" }}>
      <p className="label-gras">{props.label}</p>
      <div>{props.valeur}</div>
    </div>
  );
};

export default ElementRespAppli;
