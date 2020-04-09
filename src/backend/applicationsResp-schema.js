const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let applicationsRespSchema = new Schema( {
	id: String,
	global_id: String,
	assignations: [
		{
			personne: String,
			id_personne: String,
			structure: String,
			id_structure: String,
			role: String,
			id_role: String
		}
	]
} );

// appliquer le schéma défini à la bonne collection
module.exports = mongoose.model( 'applicationsResp', applicationsRespSchema );
