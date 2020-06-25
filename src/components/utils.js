import React from "react";
import ElementTd from "./elementTd";

import alert from "../images/alert-triangle.svg";
import AppliState from "./appliState";

// const UsersModel = require("../backend/schemas/schema-users");

/**
 * Returns a table row of lifecycle
 *
 * @param {*} libelle       name of the aplication
 * @param {*} actualState   current state of the application
 * @param {*} theLifeCycles table of lifecycles
 * @param {*} key           line number used to display striped table
 */
const cyclesList = (libelle, actualState, theLifeCycles, key) => {
  return theLifeCycles.map((lifeCycle, keyMap) => {
    return (
      <tr className={key % 2 === 0 ? "white-line" : "grey-line"} key={keyMap}>
        <td>{libelle}</td>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppliState etat={actualState} />
        </td>
        <ElementTd elem={lifeCycle.name}></ElementTd>
        {nullOrDefaultDate(lifeCycle.startDate)}
        {nullOrDefaultDate(lifeCycle.endDate)}
      </tr>
    );
  });
};

/**
 * returns a line of table composed by the six unitary information
 * of the assignations of one applicatino
 *
 * @param {*} assignations table of assignations for tha application
 * @param {*} filter       "toutes" or "manquantes"
 */
const assignationsList = (appliName, assignations, filter, lineColor) => {
  return assignations.map((assignation, keyMap) => {
    let classN;

    if (decompteInfosManquantes(assignation) === 0 && filter === "manquantes") {
      return null;
    } else {
      // if appliName filled, call from respManquantes, we alternate colours
      // "white-line" et "grey-line" by application
      if (appliName) {
        classN = lineColor % 2 === 0 ? "white-line" : "grey-line";
      } else {
        // call from applicationsResp
        // we alternate  culours by line
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
 * Returns number of missing unitary informations
 * in the object assignation which contains six
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

const titreConcepts = (nbConcepts) => {
  return nbConcepts ? <h6>Concepts</h6> : null;
};

const nullOrDefaultDate = (date) => {
  if (date === null) {
    return (
      <td>
        <img
          src={alert}
          title="mauvaise date"
          alt="mauvaise date"
          height={"30px"}
        />
      </td>
    );
  }

  const sdate = date.split("T");
  date =
    sdate[0].substr(8, 2) +
    "/" +
    sdate[0].substr(5, 2) +
    "/" +
    sdate[0].substr(0, 4);

  const sDate = "01/01/1900";
  if (date === sDate) {
    return <td className="wrongDate">{date}</td>;
  } else {
    return <td>{date}</td>;
  }
};

// const findUser = (filter, callback) => {
//   const userFound = {};

//   UsersModel.find(filter, function (err, res) {
//     if (err || !UsersModel.length) {
//       console.log("Erreur dans usersModel.find() : " + err);
//       callback(err, null);
//     } else {
//       userFound = {
//         matricule: res.matricule,
//         role: res.role,
//         pwd: res.pwd,
//       };
//     }

//     return userFound;
//   });
// };

export {
  assignationsList,
  titreConcepts,
  nullOrDefaultDate,
  cyclesList,
  // findUser,
};
