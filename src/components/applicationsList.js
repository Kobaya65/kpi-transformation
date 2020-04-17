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

  componentWillMount() {
    axios.get( 'http://localhost:4000/applications' )
      .then( response => {
        this.setState( { applis: response.data } );
        
        this.state.applis.map( function ( currentApp, i ) {
          return (
          console.log( currentApp.LibelleCourt + i + "," +
            currentApp.NomCourt + i + "," +
            currentApp.GlobalID + i + "," +
            currentApp.Commentaire + i + "," +
            currentApp.CurrentState + i )
          )
        })
        // for ( const key in this.state.applis ) {
        //   const element = this.state.applis[key];
        //   console.log( "key=" + key + ", _id=" + element._id + ", " + element.LibelleCourt );
        // }
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
          <td key={( currentApp.GlobalID + (i+1) *1 ) }>{currentApp.LibelleCourt}</td>
          <td key={( currentApp.GlobalID + (i+1) *2 ) }>{currentApp.NomCourt}</td>
          <td key={currentApp.GlobalID}>
            <Link to={"/applications/" + currentApp.GlobalID}>{currentApp.GlobalID}</Link>
          </td>
          <td key={( currentApp.GlobalID + (i+1) *3 ) }>{currentApp.Commentaire}</td>
          <td key={( currentApp.GlobalID + (i+1) *4 ) }>{currentApp.CurrentState}</td>
          {/* <td key={( GlobalID ) * 1}>{currentApp.TechnicalIdHexa}</td>
              <td key={( i + 1 ) * 2}>{currentApp.Authentification}</td>
              <td key={( i + 1 ) * 8}>{currentApp.TypeAppli}</td>
              <td key={( i + 1 ) * 9}>Concepts</td>
              <td key={( i + 1 ) * 10}>{currentApp.DateDebutProd}</td>
              <td key={( i + 1 ) * 11}>{currentApp.DateFinProd}</td> 
          */}
        </tr>
      )
    })
  }

  render() {
    console.log( 'ApplicationList render' );
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
          <Route path="/applications" component={ApplicationById} />
        </div>
      </Router>
    )
  }
}
