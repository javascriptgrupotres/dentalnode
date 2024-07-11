// START config/passport.js


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db'); // Ajuste en la ruta de la conexión a la base de datos
const bcrypt = require('bcrypt'); 

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  db.query('SELECT * FROM usuarios WHERE username = ?', [username], (err, results) => {
    if (err) {
      return done(err);
    }
    if (results.length === 0) {
      return done(null, false, { message: 'Usuario no encontrado' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
    });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) {
      return done(err);
    }
    done(null, results[0]);
  });
});

module.exports = passport;



// END config/passport.js