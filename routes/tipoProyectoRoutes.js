const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoController');

// Obtener todos los tipos de proyecto
router.get('/tiposProyecto', tipoProyectoController.obtenerTiposProyecto);

// Crear un nuevo tipo de proyecto
router.post('/tiposProyecto', tipoProyectoController.crearTipoProyecto);

// Actualizar un tipo de proyecto
router.put('/tiposProyecto/:id', tipoProyectoController.actualizarTipoProyecto);

// Eliminar un tipo de proyecto
router.delete('/tiposProyecto/:id', tipoProyectoController.eliminarTipoProyecto);

module.exports = router;

