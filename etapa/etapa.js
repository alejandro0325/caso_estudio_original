const mongoose = require('mongoose');

const etapaSchema = new mongoose.Schema({
  nombre: String,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

const Etapa = mongoose.model('Etapa', etapaSchema);

module.exports = Etapa;
