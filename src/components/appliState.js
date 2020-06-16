import React from "react";

// icons from feathericons.com
import activity from "../images/activity.svg";
import decomm from "../images/x.svg";
import closed from "../images/x-octagon.svg";
import develop from "../images/tool.svg";
import study from "../images/search.svg";
import install from "../images/grid.svg";
import alert from "../images/alert-triangle.svg";

const AppliState = (props) => {
  let imageLogo;

  switch (props.etat) {
    case "A l'étude":
      imageLogo = study;
      break;
    case "En développement":
      imageLogo = develop;
      break;
    case "Installation":
      imageLogo = install;
      break;
    case "En prod":
      imageLogo = activity;
      break;
    case "Décommissionné":
      imageLogo = decomm;
      break;
    case "Fermé":
      imageLogo = closed;
      break;
    default:
      imageLogo = alert;
  }

  return (
    <img src={imageLogo} title={props.etat} alt={props.etat} height={"30px"} />
  );
};

export default AppliState;
