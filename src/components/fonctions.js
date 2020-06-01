import React from "react";
import ElementTd from "../components/elementTableau";

const assignationsList = (assignations, filtre) => {
  return assignations.map((assignation, key) => {
    if (decompteInfosManquantes(assignation) === 0 && filtre === "manquantes") {
      return <tr key={key}></tr>;
    } else {
      return (
        <>
          <tr key={key}>
            <ElementTd elem={assignation.personne} />
            <ElementTd elem={assignation.id_personne} />
            <ElementTd elem={assignation.structure} />
            <ElementTd elem={assignation.id_structure} />
            <ElementTd elem={assignation.role} />
            <ElementTd elem={assignation.id_role} />
          </tr>
        </>
      );
    }
  });
};

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

export default assignationsList;
