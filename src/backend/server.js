const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
const router = express.Router();
const PORT = 4000;

let ApplicationsModel = require( './applications-schema' );
let ApplicationsRespModel = require( './applicationsResp-schema' );

app.use(cors());
app.use(bodyParser.json());

mongoose.connect( 'mongodb://127.0.0.1:27017/kpi-transformation', { useNewUrlParser: true, useUnifiedTopology: true } );
const connection = mongoose.connection;

connection.once( 'open', function () {
  console.log( "MongoDB's 'kpi-transformation' database connection established successfully" );
})

/* collection applications */
// validé
router.route( '/applications' ).get( function ( req, res ) {
  console.log( "route 1 applications" );
  console.log( "req.url = " + req.url );

  ApplicationsModel.find( function ( err, applications ) {
    if (err) {
      console.log( err );
    } else {
      res.json( applications );
    }
  });
});

// non validé
router.route( '/applications/:_id' ).get( function ( req, res ) {
  console.log( "route 2 applications/_id" );
  console.log( 'req.url = ' + req.url );
  
  let _id = req.params._id;
  console.log( '_id = ' + _id );
  ApplicationsModel.findById( _id, function ( err, application ) {
    res.json( application );
  } );
} );

/* collection applicationsResp */
router.route( '/applicationsResp' ).get( function ( req, res ) {
  console.log( "route 3 applicationsResp" );
  console.log( 'req.url = ' + req.url );

  ApplicationsRespModel.find( function ( err, applicationsResp ) {
    if ( err ) {
      console.log( err );
    } else {
      res.json( applicationsResp );
    }
  } );
} );

router.route( '/applicationsResp/:_id' ).get( function ( req, res ) {
  console.log( "route 4 applicationsResp/id" );
  let id = req.params.id;
  ApplicationsRespModel.findById( id, function ( err, applicationResp ) {
    res.json( applicationResp );
  } );
} );

app.use( '/', router );

app.listen( PORT );