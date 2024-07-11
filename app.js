// START app.js


const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('./config/passport');
const session = require('express-session');
const db = require('./config/db');
const { ensureAuthenticated, forwardAuthenticated } = require('./middleware/auth');

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de sesión
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Inicialización de Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Ruta para mostrar el formulario de creación de usuario
app.get('/create-user-form', forwardAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'createUserForm.html'));
});

// Ruta para manejar la creación de usuarios
app.post('/create-user', forwardAuthenticated, async (req, res) => {
  const { username, password } = req.body;

  // Encriptar la contraseña antes de almacenarla en la base de datos
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insertar el nuevo usuario en la base de datos
  const sql = 'INSERT INTO usuarios (username, password) VALUES (?, ?)';
  db.query(sql, [username, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error al crear usuario:', err);
      return res.status(500).send('Error al crear usuario');
    }
    console.log('Usuario creado exitosamente');
    res.redirect('/'); // Redirigir al inicio de sesión después de crear el usuario
  });
});

// Ruta para manejar el inicio de sesión
app.post('/login', forwardAuthenticated, passport.authenticate('local', {
  successRedirect: '/home.html', // Redirige a home.html si la autenticación es exitosa
  failureRedirect: '/', // Redirige de vuelta a index si falla la autenticación
}));

// Ruta para mostrar el formulario de inicio de sesión
app.get('/', forwardAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Asegúrate de tener index.html en tu carpeta public
});

// Ruta para cerrar sesión
app.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Rutas protegidas de la API
app.get('/home.html', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Rutas de la API
const pacienteRoutes = require('./routes/pacienteRoutes');
const profesionalRoutes = require('./routes/profesionalRoutes');
const tratamientoRoutes = require('./routes/tratamientoRoutes');
const turnoRoutes = require('./routes/turnoRoutes');

app.use('/api/pacientes', ensureAuthenticated, pacienteRoutes);
app.use('/api/profesionales', ensureAuthenticated, profesionalRoutes);
app.use('/api/tratamientos', ensureAuthenticated, tratamientoRoutes);
app.use('/api/turnos', ensureAuthenticated, turnoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// END app.js