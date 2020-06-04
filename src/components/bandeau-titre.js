import React from "react";
/**
 * @param {*} props.titre     texte à afficher dans le bandeau
 */
const BandeauTitre = (props) => {
  return (
    <div className="d-flex">
      <h5 className="bandeau-titre p-2 flex-grow-1">{props.titre}</h5>
    </div>
  );
};

export default BandeauTitre;
