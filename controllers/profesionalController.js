// START controllers/profesionalController.js


const profesionalModels = require('../models/profesionalModels');

const getAllProfesionales = async (req, res) => {
    try {
        const profesionales = await profesionalModels.getAll();
        res.json(profesionales);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener los profesionales' });
    }
};

const getProfesionalById = async (req, res) => {
    const { id } = req.params;
    try {
        const profesional = await profesionalModels.getById(id);
        if (profesional) {
            res.json(profesional);
        } else {
            res.status(404).json({ success: false, message: 'Profesional no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener el profesional' });
    }
};

const createProfesional = async (req, res) => {
    const data = req.body;
    try {
        const result = await profesionalModels.create(data);
        res.status(201).json({ success: true, message: 'Profesional creado con éxito', id: result.insertId });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al crear el profesional' });
    }
};

const updateProfesionalById = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = await profesionalModels.updateById(id, data);
        if (result.affectedRows === 1) {
            res.json({ success: true, message: 'Profesional actualizado con éxito' });
        } else {
            res.status(404).json({ success: false, message: 'Profesional no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el profesional' });
    }
};

const deleteProfesionalById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await profesionalModels.deleteById(id);
        if (result.affectedRows === 1) {
            res.json({ success: true, message: 'Profesional eliminado con éxito' });
        } else {
            res.status(404).json({ success: false, message: 'Profesional no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el profesional' });
    }
};

module.exports = {
    getAllProfesionales,
    getProfesionalById,
    createProfesional,
    updateProfesionalById,
    deleteProfesionalById,
};



// END controllers/profesionalController.js