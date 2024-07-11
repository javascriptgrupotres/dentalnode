// START models/turnoModels.js



const db = require('../config/db');

exports.getAll = (callback) => {
    const query = `
        SELECT turnos.*, pacientes.nombre AS paciente_nombre, profesionales.nombre AS profesional_nombre, tratamientos.nombre AS tratamiento_nombre
        FROM turnos
        JOIN pacientes ON turnos.paciente_id = pacientes.id
        JOIN profesionales ON turnos.profesional_id = profesionales.id
        LEFT JOIN tratamientos ON turnos.tratamiento_id = tratamientos.id
    `;
    db.query(query, callback);
};

exports.getById = (id, callback) => {
    const query = `
        SELECT turnos.*, pacientes.nombre AS paciente_nombre, profesionales.nombre AS profesional_nombre, tratamientos.nombre AS tratamiento_nombre
        FROM turnos
        JOIN pacientes ON turnos.paciente_id = pacientes.id
        JOIN profesionales ON turnos.profesional_id = profesionales.id
        LEFT JOIN tratamientos ON turnos.tratamiento_id = tratamientos.id
        WHERE turnos.id = ?
    `;
    db.query(query, [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

exports.create = (turno, callback) => {
    const query = 'INSERT INTO turnos SET ?';
    db.query(query, turno, callback);
};

exports.update = (id, turno, callback) => {
    const query = 'UPDATE turnos SET ? WHERE id = ?';
    db.query(query, [turno, id], callback);
};

exports.delete = (id, callback) => {
    const query = 'DELETE FROM turnos WHERE id = ?';
    db.query(query, [id], callback);
};

// END models/turnoModels.js



