const mongoose = require('mongoose');
const compraSchema = new mongoose.Schema({
    precioU: String,
    subtotal: String,
    iva: String,
    listado: String,
    direccion: String,
    rutempresa: String,
    fechap: String,
    fechal: String,
    detallecompra: { type:mongoose.Schema.Types.ObjectId, ref: 'Compra'}
});
module.exports = mongoose.model('Compra', compraSchema);