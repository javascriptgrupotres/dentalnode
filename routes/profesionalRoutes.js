// START routes/profesionalRoutes.js


const express = require('express');
const router = express.Router();
const profesionalController = require('../controllers/profesionalController');

router.get('/', profesionalController.getAllProfesionales);
router.get('/:id', profesionalController.getProfesionalById);
router.post('/', profesionalController.createProfesional);
router.put('/:id', profesionalController.updateProfesionalById);
router.delete('/:id', profesionalController.deleteProfesionalById);

module.exports = router;



// END routes/profesionalRoutes.js

