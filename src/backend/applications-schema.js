const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let applicationsSchema = new Schema({
	TechnicalIdHexa: String,
	Authentification: String,
	CurrentState: String,
	global_id: String,
	Commentaire: String,
	LibelleCourt: String,
	NomCourt: String,
	TypeAppli: String,
	Concepts: [
		{ nom: String }
	],
	DateDebutProd: Date,
	DateFinProd: Date,
},
{
  collection: 'applications'
})

let applicationsRespSchema = new Schema( {
	id: String,
	global_id: String,
	Assignationss: [
		{ personne: String },
		{ id_personne: String },
		{ id_structure: String },
		{ structure: String },
		{ id_role: String },
		{ role: String }
	]
},
{
  collection: 'applicationsResp'
})

module.exports = mongoose.model( 'applications', applicationsSchema );
module.exports = mongoose.model( 'applicationsResp', applicationsRespSchema );