const mongoose = require('mongoose');
const editorialSchema = new mongoose.Schema({
    nombre: String,
    contacto: String,
    libros: String
});
module.exports = mongoose.model('Editorial', editorialSchema);