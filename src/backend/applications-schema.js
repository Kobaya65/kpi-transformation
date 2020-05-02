const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let applicationsSchema = new Schema(
	{
		TechnicalIdHexa: String,
		Authentification: String,
		CurrentState: String,
		Global_Id: String,
		Commentaire: String,
		LibelleCourt: String,
		NomCourt: String,
		TypeAppli: String,
		Concepts: [
			{
				nom: String
			}
		],
		DateDebutProd: Date,
		DateFinProd: Date
	}
);

module.exports = mongoose.model( 'applications', applicationsSchema );
