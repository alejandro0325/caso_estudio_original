const TipoProyecto = require('../models/tipoProyecto');

// Obtener todos los tipos de proyecto
const obtenerTiposProyecto = async (req, res) => {
  try {
    const tiposProyecto = await TipoProyecto.find();
    res.json(tiposProyecto);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los tipos de proyecto' });
  }
};

// Crear un nuevo tipo de proyecto
const crearTipoProyecto = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoTipoProyecto = new TipoProyecto({ nombre });
    await nuevoTipoProyecto.save();
    res.status(201).json({ mensaje: 'Tipo de proyecto creado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el tipo de proyecto' });
  }
};

// Actualizar un tipo de proyecto
const actualizarTipoProyecto = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre } = req.body;
    const tipoProyectoActualizado = await TipoProyecto.findByIdAndUpdate(
      id,
      { nombre, fechaActualizacion: Date.now() },
      { new: true }
    );
    if (!tipoProyectoActualizado) {
       res.status(404).json({ mensaje: 'Tipo de proyecto no encontrado' });
    }
    res.json(tipoProyectoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el tipo de proyecto' });
  }
};

// Eliminar un tipo de proyecto
const eliminarTipoProyecto = async (req, res) => {
  try {
    const id = req.params.id;
    const tipoProyectoEliminado = await TipoProyecto.findByIdAndDelete(id);
    if (!tipoProyectoEliminado) {
     res.status(404).json({ mensaje: 'Tipo de proyecto no encontrado' });
    }
    res.json({ mensaje: 'Tipo de proyecto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el tipo de proyecto' });
  }
};

module.exports = {
  obtenerTiposProyecto,
  crearTipoProyecto,
  actualizarTipoProyecto,
  eliminarTipoProyecto,
};
