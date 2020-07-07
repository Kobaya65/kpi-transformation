import React, { Component } from "react";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import HeadBand from "../components/headband";
import { assignationsList } from "../components/utils";
import MissingRespButton from "../components/missingRespButton";

export default class ApplicationsRespManquantes extends Component {
  constructor(props) {
    super(props);
    this.changeButton = this.changeButton.bind(this);

    this.state = {
      applis: [],
      nbItems: 0,
      title: "",
      nbEmptyCells: 0,
      buttonValue: "toutes",
    };
  }

  changeButton(stateButton) {
    this.setState({ buttonValue: stateButton });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000" + this.props.match.path)
      .then((response) => {
        this.setState({ applis: response.data });
        this.setState({ nbItems: response.data.length });
        const vides = this.compteCellulesVides();
        this.setState({ nbEmptyCells: vides });

        let applications = `${this.state.nbItems} application${
          this.state.nbItems > 1 ? "s" : ""
        }`;
        let infos = `, ${this.state.nbEmptyCells} info${
          this.state.nbEmptyCells > 1 ? "s" : ""
        } manquante${this.state.nbEmptyCells > 1 ? "s" : ""}`;
        this.setState({
          title: `Applications avec responsabilités manquantes ( ${applications}${infos} )`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /**
   * works on state.applis table
   * @return  return the number of missing information for all applications
   */
  compteCellulesVides() {
    let nbEmptyCells = 0;

    this.state.applis.forEach((appli) => {
      for (let assign = 0; assign < appli.assignations.length; assign++) {
        if (appli.assignations[assign].personne === "") nbEmptyCells++;
        if (appli.assignations[assign].id_personne === "") nbEmptyCells++;
        if (appli.assignations[assign].structure === "") nbEmptyCells++;
        if (appli.assignations[assign].id_structure === "") nbEmptyCells++;
        if (appli.assignations[assign].role === "") nbEmptyCells++;
        if (appli.assignations[assign].id_role === "") nbEmptyCells++;
      }
    });
    return nbEmptyCells;
  }

  applisList(myButton) {
    let theList = this.state.applis.map(function (currentApp, key) {
      return assignationsList(
        currentApp.app[0].LibelleCourt,
        currentApp.assignations,
        myButton,
        key
      );
    });

    return theList;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex">
          <HeadBand title={this.state.title} />
          <MissingRespButton
            className="flex-lg-shrink-1"
            state={this.state.buttonValue}
            changeButton={this.changeButton}
          />
          <ReactHTMLTableToExcel
            id="button-xls-resp-manquantes"
            table="table-resp-manquantes"
            filename="table_resp_manquantes"
            sheet="Sheet1"
            buttonText="Export Excel"
          />
        </div>
        <table className="table" id="table-resp-manquantes">
          <thead>
            <tr>
              <th>Libellé court</th>
              <th>Personne</th>
              <th>ID Personne</th>
              <th>Structure</th>
              <th>ID Structure</th>
              <th>Role</th>
              <th>ID Role</th>
            </tr>
          </thead>
          <tbody>{this.applisList(this.state.buttonValue)}</tbody>
        </table>
      </div>
    );
  }
}
