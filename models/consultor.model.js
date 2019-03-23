const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConsultorSchema = new Schema({
    ConsultorId: { type: Schema.Types.ObjectId, ref: 'Agenda'},
    Nome: { type: String, required: true, max: 100 }
});


// Export the model
module.exports = mongoose.model('Consultor', ConsultorSchema,'consultores');