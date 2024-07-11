// START routes/pacienteRoutes.js


const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.get('/', pacienteController.getAllPacientes);
router.get('/:id', pacienteController.getPacienteById);
router.post('/', pacienteController.createPaciente);
router.put('/:id', pacienteController.updatePacienteById);
router.delete('/:id', pacienteController.deletePacienteById);

module.exports = router;



// END routes/pacienteRoutes.js

