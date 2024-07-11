// START routes/tratamientoRoutes.js


const express = require('express');
const router = express.Router();
const tratamientoController = require('../controllers/tratamientoController');

router.get('/', tratamientoController.getAllTratamientos);
router.get('/:id', tratamientoController.getTratamientoById);
router.post('/', tratamientoController.createTratamiento);
router.put('/:id', tratamientoController.updateTratamientoById);
router.delete('/:id', tratamientoController.deleteTratamientoById);

module.exports = router;



// END routes/tratamientoRoutes.js

