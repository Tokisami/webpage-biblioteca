const mongoose = require('mongoose');
const detallecompraSchema = new mongoose.Schema({
    producto: String
});
module.exports = mongoose.model('Detallecompra', detallecompraSchema);