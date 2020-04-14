import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import ApplicationById from "./applicationById";

export default class ApplicationsList extends Component {
  
  constructor( props ) {
    super( props );
    this.state = {
        applis: []
      }
  }

  componentDidMount() {
    axios.get( 'http://localhost:4000/applications' )
      .then( response => {
        console.log( 'componentdidMount setState' );
        this.setState( { applis: response.data } );
        
        for ( const key in this.state.applis ) {
          const element = this.state.applis[key];
          console.log( "D " + key + " " + element._id + " " + element.NomCourt + " " + element.LibelleCourt + " " + element.Commentaire + " " + element.DateDebutProd );
        }
      } )
      .catch( function ( error ) {
          console.log( error );
        }
      )
  }

  appliList() {
    return this.state.applis.map( function ( currentApp, i ) {
      return (
        <tr>
          <td key={(i+1)*0}>{currentApp.LibelleCourt}</td>
          <td key={(i+1)*1}>{currentApp.NomCourt}</td>
          <td key={currentApp.GlobalID}>
            <Link to={"/applicationById" + currentApp.GlobalID}>{currentApp.GlobalID}</Link>
          </td>
          <td key={(i+1)*2}>{currentApp.Commentaire}</td>
          <td key={(i+1)*3}>{currentApp.CurrentState}</td>
          {/* <td key={(i+1)*0}>{currentApp.TechnicalIdHexa}</td>
          <td key={(i+1)*1}>{currentApp.Authentification}</td>
          <td key={(i+1)*6}>{currentApp.TypeAppli}</td>
          <td key={(i+1)*7}>Concepts</td>
          <td key={(i+1)*8}>{currentApp.DateDebutProd}</td>
          <td key={(i+1)*9}>{currentApp.DateFinProd}</td> */}
        </tr>
      )
    })
  }

  render() {
    return (
      <Router>
        <h3>Applications List</h3>
        <table className="table table-striped" style={{ marginTop: 10 }} >
          <thead>
            <tr>
              <th>LibelleCourt</th>
              <th>NomCourt</th>
              <th>GlobalID</th>
              <th>Commentaire</th>
              <th>CurrentState</th>
              {/* <th>TechnicalIdHexa</th>
              <th>Authentification</th>
              <th>TypeAppli</th>
              <th>Concepts</th>
              <th>DateDebutProd</th>
              <th>DateFinProd</th> */}
            </tr>
          </thead>
          <tbody>
            {this.appliList()}
          </tbody>
        </table>

        <div className="container-fluid">
          <Route path="/applicationById" component={ApplicationById} />
        </div>
      </Router>
    )
  }
}
