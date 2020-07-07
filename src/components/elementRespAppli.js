import React from "react";

/**
 * Display a single information of a applicationResp
 * Apply the css class frame to simulate a 3D textbox.
 *
 * @param {*} props.label label of the field
 * @param {*} props.value value of the element
 */
const ElementRespAppli = (props) => {
  return (
    <div className="col frame" style={{ margin: "10px" }}>
      <p className="label-bold">{props.label}</p>
      <div>{props.value}</div>
    </div>
  );
};

export default ElementRespAppli;
