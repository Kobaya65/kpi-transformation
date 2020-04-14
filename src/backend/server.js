const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require( 'mongoose' );
const applicationsRoutes = express.Router();
const applicationsRespRoutes = express.Router();
const PORT = 4000;

let ApplicationsSchema = require('./applications-schema');
let ApplicationsRespSchema = require( './applicationsResp-schema' );

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/kpi-transformation', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB's 'kpi-transformation' database connection established successfully");
})

/* collection applications */
applicationsRoutes.route('/').get(function(req, res) {
  ApplicationsSchema.find(function(err, applications) {
    if (err) {
      console.log(err);
    } else {
      res.json(applications);
    }
  });
});

applicationsRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  ApplicationsSchema.findById(id, function(err, application) {
    res.json(application);
  });
});

/* collection applicationsResp */
applicationsRespRoutes.route('/applicationsResp/:id').get(function(req, res) {
  ApplicationsRespSchema.find(function(err, applicationsResp) {
    if (err) {
      console.log(err);
    } else {
      console.log( "applicationsResp appelé" );
      res.json(applicationsResp);
    }
  });
} );

applicationsRespRoutes.route('applications/:id').get(function(req, res) {
  let id = req.params.id;
  ApplicationsRespSchema.findById( id, function ( err, applicationResp ) {
  console.log("applicationsResp by id appelé")
    res.json(applicationResp);
  });
} );

// applicationRoutes.route('/update/:id').post(function(req, res) {
//     Applications.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Application updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// utilisation de deux collections de la base kpi-transformation
app.use( '/applications', applicationsRoutes );
app.use( '/applicationsResp', applicationsRespRoutes );

app.listen(PORT, function() {
  console.log("Backend server started on Port: " + PORT + " at " + Date());
});