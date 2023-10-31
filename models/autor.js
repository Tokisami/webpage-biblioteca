const mongoose = require('mongoose');
const autorSchema = new mongoose.Schema({
    nombre: String,
    birth: String,
    nacionalidad: String,
    autorl: { type:mongoose.Schema.Types.ObjectId, ref: 'Autor'}
    
});
module.exports = mongoose.model('Autor', autorSchema);