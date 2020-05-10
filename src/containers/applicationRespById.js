import React, { Component } from 'react';
import axios from 'axios';

export default class ApplicationRespById extends Component {
  
  constructor( props ) {
    super( props );
    this.state = {
      chemin: this.props.match.url,
      appli: {},
      assignations: []
    }
  }

  componentDidMount() {
    console.log( 'cDM ApplicationById ==> http://localhost:4000' + this.state.chemin )
    axios.get( 'http://localhost:4000' + this.state.chemin )
      .then( response => {
        console.log("response.status=" + response.status);
        
        this.setState( { appli: response.data } );
        this.setState( { assignations: response.data.assignations } );
      } )
      .catch( function ( error ) {
          console.log( error );
        }
      )
  }

  assignationsList() {
    return this.state.assignations.map( function ( assignation, key ) {
      return (
        <tr key={ key }>
          <td>{assignation.personne}</td>
          <td>{assignation.id_personne}</td>
          <td>{assignation.structure}</td>
          <td>{assignation.id_structure}</td>
          <td>{assignation.role}</td>
          <td>{assignation.id_role}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="libCourt" className="label-gras">ID</label>
            <textarea className="form-control" id="libCourt" rows="1" name="Libellé court" value={this.state.appli.id}></textarea>
          </div>
          <div className="col">
            <label htmlFor="nomCourt" className="label-gras">Global_id</label>
            <textarea className="form-control" id="nomCourt" rows="1" name="Nom court" value={this.state.appli.global_id}></textarea>
          </div>
        </div>

        <table className="table table-striped" style={{ marginTop: 10 }} >
          <thead>
            <tr>
              <th>Personne</th>
              <th>ID Personne</th>
              <th>Structure</th>
              <th>ID Structure</th>
              <th>Role</th>
              <th>ID Role</th>
            </tr>
          </thead>
          <tbody>
            {this.assignationsList()}
          </tbody>
        </table>
      </div>
    )
  }
}