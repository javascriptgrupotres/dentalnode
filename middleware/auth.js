// START middleware/auth.js


module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/'); // Redirige al login si no está autenticado
  },
  forwardAuthenticated: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/home.html'); // Redirige a home si ya está autenticado
  }
};


//  END middleware/auth.js