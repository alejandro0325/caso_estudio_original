const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  numero: { type: Number, unique: true },
  titulo: String,
  fechaIniciacion: Date,
  fechaEntrega: Date,
  valor: Number,
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  tipoProyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoProyecto' },
  universidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Universidad' },
  etapa: { type: mongoose.Schema.Types.ObjectId, ref: 'Etapa' },
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;

