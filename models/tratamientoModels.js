// START models/tratamientoModels.js



const db = require('../config/db');

const tratamientoModels = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tratamientos', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tratamientos WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results[0]);
            });
        });
    },
    create: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO tratamientos SET ?', [data], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE tratamientos SET ? WHERE id = ?', [data, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM tratamientos WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
};

module.exports = tratamientoModels;



// END models/tratamientoModels.js