const mongoose = require('mongoose');
const bibliotecaSchema = new mongoose.Schema({
    nombre: String,
    direccion: String,
    telefono: String
});
module.exports = mongoose.model('Biblioteca', bibliotecaSchema);