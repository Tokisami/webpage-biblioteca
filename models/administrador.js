const mongoose = require('mongoose');

const administradorSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  privilegios: [String]
});

const Admin = mongoose.model('Administrador', administradorSchema);

module.exports = Admin;