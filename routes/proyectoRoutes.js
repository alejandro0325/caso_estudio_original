const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

// Rutas de proyecto
router.get('/proyectos', proyectoController.obtenerProyectos);
router.post('/proyectos', proyectoController.crearProyecto);
router.put('/proyectos/:id', proyectoController.actualizarProyecto);
router.delete('/proyectos/:id', proyectoController.eliminarProyecto);

module.exports = router;
