const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  contrasena: String, 
  rut: String, 
  direccion: String, 
  perfil: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfil' }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;