const mongoose = require('mongoose');
const autorSchema = new mongoose.Schema({
    Direccion: String,
    Patente: String,
    DatosUser: String,
    HoraP: String,
    HoraLL: String, 
    detalletraslado1: { type:mongoose.Schema.Types.ObjectId, ref: 'Traslado'}
    
});
module.exports = mongoose.model('DetalleTraslado', autorSchema);