const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AgendaSchema = new Schema({
    Nome: { type: String, required: true, max: 100 },
    Telefone: { type: String, required: true, max: 20 },
    Consultores: { type: Schema.Types.ObjectId, ref: 'Consultor' }
});


// Export the model
module.exports = mongoose.model('Agenda', AgendaSchema, 'agendas');