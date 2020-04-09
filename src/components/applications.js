import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Appli = props => {
  return ( <tr>
    {/* <td>{props.applications.TechnicalIdHexa}</td> */}
    <td>{props.applications.Authentification}</td>
    <td>{props.applications.CurrentState}</td>
    <td>{props.applications.GlobalID}</td>
    <td>{props.applications.Commentaire}</td>
    <td>{props.applications.LibelleCourt}</td>
    {/* <td>{props.applications.NomCourt}</td> */}
    {/* <td>{props.applications.TypeAppli}</td> */}
    {/* <td>{props.applications.Concepts}</td> */}
    <td>{props.applications.DateDebutProd}</td>
    <td>{props.applications.DateFinProd}</td>
    </tr>
  );
}

export default class ApplicationsList extends Component {
  
  constructor( props ) {
    super( props );
    this.state = { applications: props.data };
    console.log( "constructor\n" + this.state);
  }

  componentDidMount() {
    console.log( "componentDidMount" );
    axios.get( 'http://localhost:4000/applications/' )
      .then( response => {
          this.setState( { applications: response.data } );
        }
      )
      .catch( function ( error ) {
          console.log( error );
        }
      )
  }
  
  // applicationList() {
  //   console.log( "this.applicationList()" );
  //   return this.state.applications.map(function(currentApp, i){
  //       return <Appli application={currentApp} key={i} />;
  //     }
  //   )
  // }

  render() {
    return (
      <div>
        <h3>Applications List</h3>
        <table className="table table-striped" style={{ marginTop: 10 }} >
          <thead>
            <tr>
              {/* <th>TechnicalIdHexa</th> */}
              <th>Authentification</th>
              <th>CurrentState</th>
              <th>GlobalID</th>
              <th>Commentaire</th>
              <th>LibelleCourt</th>
              {/* <th>NomCourt</th>
              <th>TypeAppli</th>
              <th>Concepts</th> */}
              <th>DateDebutProd</th>
              <th>DateFinProd</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.applicationList()} */}
          </tbody>
        </table>
      </div>
    )
  }
}
