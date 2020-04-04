const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const applicationRoutes = express.Router();
const PORT = 4000;

let Applications = require('./applications-schema');
// let ApplicationsResp = require( './applicationsResp-schema' );

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/kpi-transformation', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB's 'kpi-transformation' database connection established successfully");
})

/* collection applications */
applicationRoutes.route('/applications').get(function(req, res) {
    Applications.find(function(err, applications) {
        if (err) {
            console.log(err);
        } else {
            res.json(applications);
        }
    });
});

// applicationRoutes.route('/application/:id').get(function(req, res) {
//     let id = req.params.id;
//     Applications.findById(id, function(err, application) {
//         res.json(application);
//     });
// });

/* collection applicationsResp */
// applicationRoutes.route('/applicationsResp').get(function(req, res) {
//   ApplicationsResp.find(function(err, applicationsResp) {
//       if (err) {
//           console.log(err);
//       } else {
//           res.json(applicationsResp);
//       }
//   });
// } );

// applicationRoutes.route('/applicationResp/:id').get(function(req, res) {
//   let id = req.params.id;
//   ApplicationsResp.findById(id, function(err, applicationResp) {
//       res.json(applicationResp);
//   });
// } );

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
app.use( '/applications', applicationRoutes );
// app.use( '/applicationsResp', applicationRoutes );

app.listen(PORT, function() {
    console.log("Backend server is running on Port: " + PORT);
});