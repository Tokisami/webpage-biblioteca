const mongoose = require('mongoose');

const perfilSchema = new mongoose.Schema({
  nombre: String
});

const Perfil = mongoose.model('Perfil', perfilSchema);

module.exports = Perfil;