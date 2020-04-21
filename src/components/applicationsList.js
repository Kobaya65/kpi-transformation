import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import ApplicationById from "./applicationById";

export default class ApplicationsList extends Component {
  
  constructor( props ) {
    console.log('constructor ApplicationsList')
    super( props );
    this.state = {
      chemin: props.match.path,
      applis: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount ApplicationsList')
    axios.get( 'http://localhost:4000' + this.state.chemin )
      .then( response => {
        this.setState( { applis: response.data } );
        
        // this.state.applis.map( function ( currentApp, i ) {
        //   return (
        //   console.log( ( i + 1 ) + " " + currentApp._id + " " + currentApp.LibelleCourt + " " + currentApp.GlobalID )
        //   )
        // })
      })
      .catch( function ( error ) {
          console.log( error );
        }
      ) 
  }

  componentWillUnmount() {
    console.log('componentWillUnmount ApplicationsList')
  }

  appliList() {
    console.log('appliList ApplicationsList')
    return this.state.applis.map( function ( currentApp, i ) {
      return (
        <tr key={ currentApp._id + ( i * 1 ) }>
          <td>{currentApp.LibelleCourt}</td>
          <td>{currentApp.NomCourt}</td>
          <td>
            <Link to={`/applications/${currentApp._id}`}>{currentApp.GlobalID}</Link>
          </td>
          <td>{currentApp.Commentaire}</td>
          <td>{currentApp.CurrentState}</td>
        </tr>
      )
    })
  }

  render() {
    console.log('render ApplicationsList')
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
            </tr>
          </thead>
          <tbody>
            {this.appliList()}
          </tbody>
          <>
            <Route path="/applications/:currentAppId" component={ApplicationById} />
          </>
        </table>
      </Router>
    )
  }
}
