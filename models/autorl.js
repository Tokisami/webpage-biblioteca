const mongoose = require('mongoose');
const autorlSchema = new mongoose.Schema({
    nombre: String
});
module.exports = mongoose.model('Autorl', autorlSchema);