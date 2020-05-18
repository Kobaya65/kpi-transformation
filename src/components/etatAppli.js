import React from "react";

import activity from "../images/activity.svg";
import decomm from "../images/x-octagon.svg";

const EtatAppli = (props) => {
  let imageLogo;

  props.etat === "En prod" ? (imageLogo = activity) : (imageLogo = decomm);

  return (
    <img
      src={imageLogo}
      alt={props.etat}
      height="20px"
      style={{ justifyContent: "center", alignItems: "center" }}
    />
  );
};

export default EtatAppli;
