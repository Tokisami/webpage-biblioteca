const mongoose = require('mongoose');
const autorlSchema = new mongoose.Schema({
    fecha: String
});
module.exports = mongoose.model('Traslado1', autorlSchema);