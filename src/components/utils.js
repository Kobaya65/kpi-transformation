import React from "react";
import ElementTd from "./elementTd";

import alert from "../images/alert-triangle.svg";
import AppliState from "./appliState";

/**
 * Returns a table row of lifecycle
 *
 * @param {*} label         name of the application
 * @param {*} actualState   current state of the application
 * @param {*} theLifeCycles table of lifecycles
 * @param {*} key           line number used to display striped table
 */
const cyclesList = (label, actualState, theLifeCycles, key) => {
  return theLifeCycles.map((lifeCycle, keyMap) => {
    return (
      <tr className={key % 2 === 0 ? "white-line" : "grey-line"} key={keyMap}>
        <td>{label}</td>
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
 * returns a table row composed by the six unitary information
 * of the assignations of one application
 *
 * @param {*} assignations table of assignations for the application
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
        // we alternate colours by line
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
 * in the object assignation which include six
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

/**
 * function used to transform ISODate format to french date (dd/mm/yyyy)
 *
 * @param {*} date date to format
 *
 * @return a table cell containing
 *         - date as a string with dd/mm/yyyy format if @param date is valid
 *         - alert icon if date is null
 */
const nullOrDefaultDate = (date) => {
  if (date === null) {
    return (
      <td className="center-table">
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
    return <td className="wrongDate center-table">{date}</td>;
  } else {
    return <td className="center-table">{date}</td>;
  }
};

/**
 * populate the dataset of a pie graph
 *
 * @param {*} title     graph's label
 * @param {*} graphData data for plotting the graph
 */
const createDatasetPie = (graphData) => {
  let data = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "aqua",
          "brown",
          "darkmagenta",
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "lightblue",
        ],
        borderColor: [
          "aqua",
          "brown",
          "darkmagenta",
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "lightblue",
        ],
        borderWidth: 1,
      },
    ],
    labels: [],
  };

  graphData.forEach((element) => {
    data.datasets[0].data.push(element.nbApp);
    data.labels.push(element._id);
  });

  return data;
};

/**
 * populate the dataset of a line graph
 *
 * @param {*} title     graph's label
 * @param {*} graphData data for plotting the graph
 */
const createDatasetLine = (graphData) => {
  let data = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "aqua",
          "brown",
          "darkmagenta",
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "lightblue",
        ],
        borderColor: [
          "aqua",
          "brown",
          "darkmagenta",
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "lightblue",
        ],
        borderWidth: 1,
      },
    ],
    labels: [],
  };

  // let elemPrec = "";
  // let idxDataset = -1;
  // graphData.forEach((element) => {
  //   if (element.Perimetre != elemPrec) {
  //     elemPrec = element.Perimetre;
  //   }
  //   if (element.Perimetre == elemPrec) {
  //     data.labels.push(element.DateMesure);
  //   } else {
  //     break;
  //   }
  // });

  graphData.forEach((element) => {
    // if (element.Perimetre != elemPrec) {
    //   elemPrec = element.Perimetre;
    //   idxDataset++;
    // }
    data.datasets[0].data.push(element.ValeurMesure);
    data.labels.push(element.DateMesure);
  });

  return data;
};

/**
 * create a list of all perimeter names
 *
 * @param {*} data array of which to create a list of unique name of perimeters
 */
const perimeterList = (data) => {
  let temp = [];
  let flag = false;

  data.forEach((element) => {
    flag = false;
    for (let elem = 0; elem < temp.length; elem++) {
      if (temp[elem] === element.Perimetre) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      temp.push(element.Perimetre);
    }
  });

  return temp;
};

export {
  assignationsList,
  titreConcepts,
  nullOrDefaultDate,
  cyclesList,
  createDatasetPie,
  createDatasetLine,
  perimeterList,
};
