import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ApplicationsResp extends Component {

  constructor( props ) {
    console.log('constructor ApplicationsResp')
    super( props );
    this.state = {
      chemin: props.match.path,
      appli: []
    }
  }

  componentDidMount() {
    console.log( 'componentDidMount ApplicationsResp' )
    console.log( 'Appel de la base avec http://localhost:4000' + this.state.chemin );
   
    axios.get( 'http://localhost:4000' + this.state.chemin )
      .then( response => {
        console.log( '.then' );
        this.setState( { appli: response.data } );
      })
      .catch( function ( error ) {
          console.log( error );
        }
      ) 
  }

  appliList() {
    return this.state.appli.map( function ( currentApp ) {
      return (
        <tr key={ currentApp._id }>
          <td>{currentApp.id}</td>
          <td>
            <Link to={`/applicationsResp/${ currentApp._id }`}>{currentApp.global_id}</Link>
          </td>
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
              <th>id</th>
              <th>global_id</th>
            </tr>
          </thead>
          <tbody>
            {this.appliList()}
          </tbody>
        </table>
      </>
    )
  }
}
