const mongoose = require('mongoose');

const detalleMermaSchema = new mongoose.Schema({
  producto: String,
  tipoDeMerma: String,
  costoUnitario: Number,
  subtotal: Number,
  merma: { type: mongoose.Schema.Types.ObjectId, ref: 'Merma' },
});

const DetalleMerma = mongoose.model('DetalleMerma', detalleMermaSchema);

module.exports = DetalleMerma;