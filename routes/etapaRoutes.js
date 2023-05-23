const express = require('express');
const router = express.Router();
const etapaController = require('../controllers/etapaController');

// Rutas de etapa
router.get('/etapas', etapaController.obtenerEtapas);
router.post('/etapas', etapaController.nuevaEtapa);
router.put('/etapas/:id', etapaController.actualizarEtapa);
router.delete('/etapas/:id', etapaController.eliminarEtapa);

module.exports = router;
