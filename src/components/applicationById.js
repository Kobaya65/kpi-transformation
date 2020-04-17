import React, { Component } from 'react';
import axios from 'axios';

export default class ApplicationById extends Component {
  
  constructor( props ) {
    console.log( 'ApplicationById constructor' );
    super( props );
    this.state = {
      appli: {}
    }
  }

  componentWillMount() {
    console.log( 'ApplicationById componentWillMount' );
    axios.get( 'http://localhost:4000/applications/5e8bb15d89413125ac32f223' )
      .then( response => {
        this.setState( { appli: response.data } );
        
        for ( const key in this.state.appli ) {
          console.log( "state " + key + " = " + this.state.appli[key] );
        }
      } )
      .catch( function ( error ) {
          console.log( error );
        }
      )
  }

  render() {
    console.log( 'ApplicationById render' );
    return (
      <>
        <h3>Application by ID</h3>
        <div className="row">
           <div className="col">
             <label htmlFor="libCourt">Libellé Court :</label>
            <textarea className="form-control" id="libCourt" rows="1" name="Libellé court">{this.state.appli.LibelleCourt}</textarea>
           </div>
           <div className="col">
             <label htmlFor="nomCourt">Nom Court :</label>
             <textarea className="form-control" id="nomCourt" rows="1" name="Nom court">{this.state.appli.NomCourt}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label htmlFor="globalId">GlobalID :</label>
             <textarea  className="form-control" id="globalId" rows="1" name="Global ID">{this.state.appli.GlobalID}</textarea>
           </div>
           <div className="col">
             <label htmlFor="techIdHexa">TechnicalIdHexa :</label>
             <textarea className="form-control" id="techIdHexa" rows="1" name="Technical ID Hexa">{this.state.appli.TechnicalIdHexa}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label htmlFor="comment">Commentaire :</label>
             <textarea className="form-control" id="comment" rows="5" name="Commentaire">{this.state.appli.Commentaire}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label htmlFor="authent">Authentification :</label>
             <textarea  className="form-control" id="authent" rows="1" name="Authentification">{this.state.appli.Authentification}</textarea>
           </div>
           <div className="col">
             <label htmlFor="typeAppli">Type appli :</label>
             <textarea className="form-control" id="typeAppli" rows="1" name="Type Appli">{this.state.appli.TypeAppli}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label htmlFor="dateDebut">Date Début Prod :</label>
             <textarea  className="form-control" id="dateDebut" rows="1" name="Date debut Prod">{this.state.appli.DateDebutProd}</textarea>
           </div>
           <div className="col">
             <label htmlFor="dateFin">Date Fin Prod :</label>
             <textarea className="form-control" id="dateFin" rows="1" name="Date fin Prod">{this.state.appli.DateFinProd}</textarea>
           </div>
         </div>
      </>
    )
  }
}