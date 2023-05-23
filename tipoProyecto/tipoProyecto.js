const mongoose = require('mongoose');

const tipoProyectoSchema = new mongoose.Schema({
  nombre: { type: String, unique: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

const TipoProyecto = mongoose.model('TipoProyecto', tipoProyectoSchema);

module.exports = TipoProyecto;
