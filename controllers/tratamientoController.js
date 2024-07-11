// START controllers/tratamientoController.js


const tratamientoModels = require('../models/tratamientoModels');

const getAllTratamientos = async (req, res) => {
    try {
        const tratamientos = await tratamientoModels.getAll();
        res.json(tratamientos);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener los tratamientos' });
    }
};

const getTratamientoById = async (req, res) => {
    const { id } = req.params;
    try {
        const tratamiento = await tratamientoModels.getById(id);
        if (tratamiento) {
            res.json(tratamiento);
        } else {
            res.status(404).json({ success: false, message: 'Tratamiento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al obtener el tratamiento' });
    }
};

const createTratamiento = async (req, res) => {
    const data = req.body;
    try {
        const result = await tratamientoModels.create(data);
        res.status(201).json({ success: true, message: 'Tratamiento creado con éxito', id: result.insertId });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al crear el tratamiento' });
    }
};

const updateTratamientoById = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = await tratamientoModels.updateById(id, data);
        if (result.affectedRows === 1) {
            res.json({ success: true, message: 'Tratamiento actualizado con éxito' });
        } else {
            res.status(404).json({ success: false, message: 'Tratamiento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al actualizar el tratamiento' });
    }
};

const deleteTratamientoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await tratamientoModels.deleteById(id);
        if (result.affectedRows === 1) {
            res.json({ success: true, message: 'Tratamiento eliminado con éxito' });
        } else {
            res.status(404).json({ success: false, message: 'Tratamiento no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al eliminar el tratamiento' });
    }
};

module.exports = {
    getAllTratamientos,
    getTratamientoById,
    createTratamiento,
    updateTratamientoById,
    deleteTratamientoById,
};



// END controllers/tratamientoController.js