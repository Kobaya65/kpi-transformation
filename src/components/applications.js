import React, { Component } from 'react';
// import TableCell from './tableCell';

import axios from 'axios';

// const Appli = props => {
//   return ( <tr>
//     <td>{props.applications.TechnicalIdHexa}</td>
//       <td>{props.applications.Authentification}</td>
//       <td>{props.applications.CurrentState}</td>
//       <td>{props.applications.GlobalID}</td>
//       <td>{props.applications.Commentaire}</td>
//       <td>{props.applications.LibelleCourt}</td>
//       <td>{props.applications.NomCourt}</td>
//       <td>{props.applications.TypeAppli}</td>
//       <td>{props.applications.Concepts}</td>
//       <td>{props.applications.DateDebutProd}</td>
//       <td>{props.applications.DateFinProd}</td>
//     </tr>
//   );
// }

export default class ApplicationsList extends Component {
  state = {
    applis: []
  }
  
  constructor( props ) {
    super( props );
    console.log( 'constructor run' );
  }

  componentDidMount() {
    axios.get( 'http://localhost:4000/applications/' )
      .then( response => {
        console.log( 'componentDidMount run' );
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
    const applicas = this.state.applis;

    return (
        {applicas.map( ( appli ) => {
          <tr>
            <TableCell techIdHexa={appli.TechnicalIdHexa} />
            <TableCell authent={appli.Authentification} />
            <TableCell currentState={appli.CurrentState} />
            <TableCell comment={appli.Commentaire} />
            <TableCell libelleCourt={appli.LibelleCourt} />
            <TableCell nomCourt={appli.NomCourt} />
            <TableCell typeAppli={appli.TypeAppli} />
            <TableCell concepts={appli.Concepts} />
            <TableCell dateDebutProd={appli.DateDebutProd} />
            <TableCell dateFinProd={appli.DateFinProd} />
          </tr>
        })}
    );
  }

  render() {
    return (
      <div>
        <h3>Applications List</h3>
        <table className="table table-striped" style={{ marginTop: 10 }} >
          <thead>
            <tr>
              <th>TechnicalIdHexa</th>
              <th>Authentification</th>
              <th>CurrentState</th>
              <th>GlobalID</th>
              <th>Commentaire</th>
              <th>LibelleCourt</th>
              <th>NomCourt</th>
              <th>TypeAppli</th>
              <th>Concepts</th>
              <th>DateDebutProd</th>
              <th>DateFinProd</th>
            </tr>
          </thead>
          <tbody>
            {this.appliList(props)}
          </tbody>
        </table>
      </div>
    )
  }
}
