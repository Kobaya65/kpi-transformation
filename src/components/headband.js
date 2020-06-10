import React from "react";

/**
 * @param {*} props.title     text to display in the headband
 */
const HeadBand = (props) => {
  return <h5 className="headband p-2 flex-grow-1">{props.title}</h5>;
};

export default HeadBand;
