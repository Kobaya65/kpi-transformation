import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class ApplicationsResp extends Component {
  
  constructor( props ) {
    console.log('constructor ApplicationsResp')
    super( props );
    this.state = {
      chemin: props.match.path,
      applis: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount ApplicationsResp')
    axios.get( 'http://localhost:4000' + this.state.chemin )
      .then( response => {
        this.setState( { applis: response.data } );
      })
      .catch( function ( error ) {
          console.log( error );
        }
      ) 
  }

  appliRespList() {
    console.log('appliList ApplicationsResp')
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
    console.log('render ApplicationsResp')
    return (
      <>
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
            {this.appliRespList()}
          </tbody>
        </table>
      </>
    )
  }
}
