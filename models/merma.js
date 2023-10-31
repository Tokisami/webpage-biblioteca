const mongoose = require('mongoose');
const DetalleMerma = require('./detallemerma'); // Importa el modelo DetalleMerma

const mermaSchema = new mongoose.Schema({
  fechaRegistro: { type: Date, default: Date.now },
  descripcion: String,
  cantidad: Number,
  detalles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DetalleMerma' }],
});


const Merma = mongoose.model('Merma', mermaSchema);

module.exports = Merma;