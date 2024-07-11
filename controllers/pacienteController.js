// START controllers/pacienteController.js


const pacienteModels = require('../models/pacienteModels');

const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await pacienteModels.getAll();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener los pacientes' });
    }
};

const getPacienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const paciente = await pacienteModels.getById(id);
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({ success: false, message: 'Paciente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener el paciente' });
    }
};

const createPaciente = async (req, res) => {
    const data = req.body;
    try {
        const result = await pacienteModels.create(data);
        res.status(201).json({ success: true, message: 'Paciente creado con éxito', id: result.insertId });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al crear el paciente' });
    }
};

const updatePacienteById = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = await pacienteModels.updateById(id, data);
        if (result.affectedRows === 1) {
            res.json({ success: true, message: 'Paciente actualizado con éxito' });
        } else {
            res.status(404).json({ success: false, message: 'Paciente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el paciente' });
    }
};

const deletePacienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pacienteModels.deleteById(id);
        if (result.affectedRows === 1) {
            res.json({ success: true, message: 'Paciente eliminado con éxito' });
        } else {
            res.status(404).json({ success: false, message: 'Paciente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el paciente' });
    }
};

module.exports = {
    getAllPacientes,
    getPacienteById,
    createPaciente,
    updatePacienteById,
    deletePacienteById,
};



// END controllers/pacienteController.js