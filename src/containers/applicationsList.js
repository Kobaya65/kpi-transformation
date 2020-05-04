import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import applicationById from "./applicationById";

export default class ApplicationsList extends Component {
  
  constructor( props ) {
    super( props );
    this.state = {
      chemin: props.match.path,
      applis: []
    }
  }

  componentDidMount() {
    console.log( 'http://localhost:4000' + this.state.chemin )
    axios.get( 'http://localhost:4000' + this.state.chemin )
      .then( response => {
        this.setState( { applis: response.data } );
      })
      .catch( function ( error ) {
          console.log( error );
        }
      ) 
  }

  appliList() {
    return this.state.applis.map( function ( currentApp ) {
      return (
        <tr key={ currentApp._id }>
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
    return (
      <Router>
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
        </table>

        <Route path="/applications/:_id" component={applicationById} />
      </Router>
    )
  }
}
