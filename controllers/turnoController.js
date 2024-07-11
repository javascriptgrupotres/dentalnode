// START controllers/turnoController.js



// START controllers/turnoController.js

const turnoModel = require('../models/turnoModels');

exports.getAllTurnos = (req, res) => {
    turnoModel.getAll((err, results) => {
        if (err) return res.status(500).json({ message: 'Error al obtener los turnos' });
        res.json(results);
    });
};

exports.getTurnoById = (req, res) => {
    const id = req.params.id;
    turnoModel.getById(id, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al obtener el turno' });
        res.json(result);
    });
};

exports.createTurno = (req, res) => {
    const newTurno = req.body;
    turnoModel.create(newTurno, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al crear el turno' });
        res.json({ message: 'Turno creado exitosamente', id: result.insertId });
    });
};

exports.updateTurno = (req, res) => {
    const id = req.params.id;
    const updatedTurno = req.body;
    turnoModel.update(id, updatedTurno, (err) => {
        if (err) return res.status(500).json({ message: 'Error al actualizar el turno' });
        res.json({ message: 'Turno actualizado exitosamente' });
    });
};

exports.deleteTurno = (req, res) => {
    const id = req.params.id;
    turnoModel.delete(id, (err) => {
        if (err) return res.status(500).json({ message: 'Error al eliminar el turno' });
        res.json({ message: 'Turno eliminado exitosamente' });
    });
};

// END controllers/turnoController.js



// END controllers/turnoController.js