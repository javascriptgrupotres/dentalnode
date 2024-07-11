// START models/profesionalModels.js



const db = require('../config/db');

const profesionalModels = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM profesionales', (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM profesionales WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results[0]);
            });
        });
    },
    create: (data) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO profesionales SET ?', [data], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE profesionales SET ? WHERE id = ?', [data, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM profesionales WHERE id = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
};

module.exports = profesionalModels;



// END models/profesionalModels.js