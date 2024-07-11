// START models/pacienteModels.js



const db = require('../config/db');

const pacienteModels = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM pacientes', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM pacientes WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results[0]);
            });
        });
    },
    create: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO pacientes SET ?', [data], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE pacientes SET ? WHERE id = ?', [data, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM pacientes WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
};

module.exports = pacienteModels;



// END models/pacienteModels.js