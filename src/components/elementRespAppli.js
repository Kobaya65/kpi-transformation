import React from "react";

const ElementRespAppli = (props) => {
  return (
    <div className="col frame" style={{ margin: "10px" }}>
      <p className="label-bold">{props.label}</p>
      <div>{props.value}</div>
    </div>
  );
};

export default ElementRespAppli;
