import React from "react";
import ElementTd from "./elementTd";

/**
 * Retourne une ligne de tableau composée des six informations unitaires
 * des assignations d'une application
 *
 * @param {*} assignations tableau des assignations d'une application
 * @param {*} filter       "toutes" ou "manquantes"
 */
const assignationsList = (appliName, assignations, filter, lineColor) => {
  return assignations.map((assignation, keyMap) => {
    let classN;

    if (decompteInfosManquantes(assignation) === 0 && filter === "manquantes") {
      return null;
    } else {
      if (appliName) {
        classN = lineColor % 2 === 0 ? "white-line" : "grey-line";
      } else {
        classN = "table-striped";
      }

      return (
        <tr className={classN} key={keyMap}>
          {appliName ? <ElementTd elem={appliName} /> : null}
          <ElementTd elem={assignation.personne} />
          <ElementTd elem={assignation.id_personne} />
          <ElementTd elem={assignation.structure} />
          <ElementTd elem={assignation.id_structure} />
          <ElementTd elem={assignation.role} />
          <ElementTd elem={assignation.id_role} />
        </tr>
      );
    }
  });
};

/**
 * Retourne le nombre d'informations unitaires manquantes
 * dans l'objet assignation qui en contient six
 * @param {*} assign assignation
 */
const decompteInfosManquantes = (assign) => {
  let nbMissing = 0;

  nbMissing += assign.personne === "" ? 1 : 0;
  nbMissing += assign.id_personne === "" ? 1 : 0;
  nbMissing += assign.structure === "" ? 1 : 0;
  nbMissing += assign.id_structure === "" ? 1 : 0;
  nbMissing += assign.role === "" ? 1 : 0;
  nbMissing += assign.id_role === "" ? 1 : 0;

  return nbMissing;
};

export { assignationsList };
