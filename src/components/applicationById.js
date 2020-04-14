import React, { Component } from 'react';
import axios from 'axios';

export default class ApplicationById extends Component {
  
  constructor( props ) {
    super( props );
    this.state = {
        applis: []
      }
  }

  componentDidMount() {
    axios.get( 'http://localhost:4000/applications/' )
      .then( response => {
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

  render() {
    const data = this.props.appli;

    return (
      <div>
        <h3>Application by ID</h3>
        {/* <div className="row">
           <div className="col">
             <label for="libCourt">Libellé Court :</label>
             <textarea className="form-control" id="libCourt" rows="1" name="Libellé court">{data.LibelleCourt}</textarea>
           </div>
           <div className="col">
             <label for="nomCourt">Nom Court :</label>
             <textarea className="form-control" id="nomCourt" rows="1" name="Nom court">{data.NomCourt}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label for="globalId">GlobalID :</label>
             <textarea  className="form-control" id="globalId" rows="1" name="Global ID">{data.GlobalID}</textarea>
           </div>
           <div className="col">
             <label for="techIdHexa">TechnicalIdHexa :</label>
             <textarea className="form-control" id="techIdHexa" rows="1" name="Technical ID Hexa">{data.TechnicalIdHexa}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label for="comment">Commentaire :</label>
             <textarea className="form-control" id="comment" rows="5" name="Commentaire">{data.Commentaire}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label for="authent">Authentification :</label>
             <textarea  className="form-control" id="authent" rows="1" name="Authentification">{data.Authentification}</textarea>
           </div>
           <div className="col">
             <label for="typeAppli">Type appli :</label>
             <textarea className="form-control" id="typeAppli" rows="1" name="Type Appli">{data.TypeAppli}</textarea>
           </div>
         </div>

         <div className="row">
           <div className="col">
             <label for="dateDebut">Date Début Prod :</label>
             <textarea  className="form-control" id="dateDebut" rows="1" name="Date debut Prod">{data.DateDebutProd}</textarea>
           </div>
           <div className="col">
             <label for="dateFin">Date Fin Prod :</label>
             <textarea className="form-control" id="dateFin" rows="1" name="Date fin Prod">{data.DateFinProd}</textarea>
           </div>
         </div>
         <td key={i*7}>Concepts</td> */}
      </div>
    )
  }
}