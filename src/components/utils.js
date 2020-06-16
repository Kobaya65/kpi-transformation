import React from "react";
import ElementTd from "./elementTd";

/**
 * returns a line of table composed by the six unitary information
 * of the assignations of one applicatino
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
      // appel depuis respManquantes
      // appliName est renseigné, on alterne les couleurs
      // "white-line" et "grey-line par appli
      if (appliName) {
        classN = lineColor % 2 === 0 ? "white-line" : "grey-line";
      } else {
        // appel depuis applicationsResp
        // sinon on alterne les couleurs par ligne
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
