const mongoose = require('mongoose');
const catalogoSchema = new mongoose.Schema({
    id: ID,
    Nombre: String,
    Contacto: String,
    Lista: String
 
});
module.exports = mongoose.model('catalogo', catalogoSchema);