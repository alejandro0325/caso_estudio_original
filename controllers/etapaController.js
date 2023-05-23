const Etapa = require('../models/etapa');

// Controladores CRUD para el modelo Etapa

// Obtener todas las etapas
exports.obtenerEtapas = async (req, res) => {
  try {
    const etapas = await Etapa.find();
    res.json(etapas);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Crear una nueva etapa
exports.nuevaEtapa = async (req, res) => {
  const etapa = new Etapa(req.body);

  try {
    await etapa.save();
    res.json({ mensaje: 'Etapa creada correctamente' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Actualizar una etapa por su ID
exports.actualizarEtapa = async (req, res) => {
  try {
    const etapa = await Etapa.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(etapa);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Eliminar una etapa por su ID
exports.eliminarEtapa = async (req, res) => {
  try {
    await Etapa.findByIdAndDelete({ _id: req.params.id });
    res.json({ mensaje: 'Etapa eliminada correctamente' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
