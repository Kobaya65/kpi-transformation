import React from "react";
import alert from "../images/alert-triangle.svg";

const ElementTd = (props) => {
  return props.elem === "" ? (
    <td>
      {/* <td style={{ textAlign: "center" }}> */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img
        src={alert}
        title={"missing data"}
        alt={"missing data"}
        height={"30px"}
      />
    </td>
  ) : (
    <td>{props.elem}</td>
  );
};

export default ElementTd;
