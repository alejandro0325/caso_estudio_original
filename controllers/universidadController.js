const Universidad = require('../models/universidad');

// Obtener todas las universidades
const obtenerUniversidades = async (req, res) => {
  try {
    const universidades = await Universidad.find();
    res.json(universidades);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las universidades' });
  }
};

// Crear una nueva universidad
const crearUniversidad = async (req, res) => {
  try {
    const { nombre, direccion, telefono } = req.body;
    const nuevaUniversidad = new Universidad({ nombre, direccion, telefono });
    await nuevaUniversidad.save();
    res.status(201).json({ mensaje: 'Universidad creada exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la universidad' });
  }
};

// Actualizar una universidad
const actualizarUniversidad = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, direccion, telefono } = req.body;
    const universidadActualizada = await Universidad.findByIdAndUpdate(
      id,
      { nombre, direccion, telefono },
      { new: true }
    );
    if (!universidadActualizada) {
       res.status(404).json({ mensaje: 'Universidad no encontrada' });
    }
    res.json(universidadActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la universidad' });
  }
};

// Eliminar una universidad
const eliminarUniversidad = async (req, res) => {
  try {
    const id = req.params.id;
    const universidadEliminada = await Universidad.findByIdAndDelete(id);
    if (!universidadEliminada) {
       res.status(404).json({ mensaje: 'Universidad no encontrada' });
    }
    res.json({ mensaje: 'Universidad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la universidad' });
  }
};

module.exports = {
  obtenerUniversidades,
  crearUniversidad,
  actualizarUniversidad,
  eliminarUniversidad,
};
