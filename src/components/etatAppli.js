import React from "react";

// icônes issues de feathericons.com
import activity from "../images/activity.svg";
import decomm from "../images/x-octagon.svg";
/* statuts disponibles dans Kear
  En développement  tool.svg
  A l'étude         search.svg
  Fermée            
  Installation      grid.svg
*/
const EtatAppli = (props) => {
  let imageLogo;

  props.etat === "En prod" ? (imageLogo = activity) : (imageLogo = decomm);

  return <img src={imageLogo} alt={props.etat} height={"20px"} />;
};

export default EtatAppli;
