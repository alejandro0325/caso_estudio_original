const express = require('express');
const router = express.Router();
const universidadController = require('../controllers/universidadController');

// Rutas de universidad
router.get('/universidades', universidadController.obtenerUniversidades);
router.post('/universidades', universidadController.crearUniversidad);
router.put('/universidades/:id', universidadController.actualizarUniversidad);
router.delete('/universidades/:id', universidadController.eliminarUniversidad);

module.exports = router;
