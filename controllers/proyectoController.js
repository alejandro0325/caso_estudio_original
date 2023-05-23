const Proyecto = require('../models/proyecto');

// Obtener todos los proyectos
const obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los proyectos' });
  }
};

// Crear un nuevo proyecto
const crearProyecto = async (req, res) => {
  try {
    const { numero, titulo, fechaInicio, fechaEntrega, valor, cliente, tipoProyecto, universidad, etapa } = req.body;
    const nuevoProyecto = new Proyecto({ numero, titulo, fechaInicio, fechaEntrega, valor, cliente, tipoProyecto, universidad, etapa });
    await nuevoProyecto.save();
    res.status(201).json({ mensaje: 'Proyecto creado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el proyecto' });
  }
};

// Actualizar un proyecto
const actualizarProyecto = async (req, res) => {
  try {
    const id = req.params.id;
    const { numero, titulo, fechaInicio, fechaEntrega, valor, cliente, tipoProyecto, universidad, etapa } = req.body;
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(
      id,
      { numero, titulo, fechaInicio, fechaEntrega, valor, cliente, tipoProyecto, universidad, etapa },
      { new: true }
    );
    if (!proyectoActualizado) {
       res.status(404).json({ mensaje: 'Proyecto no encontrado' });
    }
    res.json(proyectoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el proyecto' });
  }
};

// Eliminar un proyecto
const eliminarProyecto = async (req, res) => {
  try {
    const id = req.params.id;
    const proyectoEliminado = await Proyecto.findByIdAndDelete(id);
    if (!proyectoEliminado) {
       res.status(404).json({ mensaje: 'Proyecto no encontrado' });
    }
    res.json({ mensaje: 'Proyecto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el proyecto' });
  }
};

module.exports = {
  obtenerProyectos,
  crearProyecto,
  actualizarProyecto,
  eliminarProyecto,
};
