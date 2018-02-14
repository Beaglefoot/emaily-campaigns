const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(`current user: ${req.user}`);
  });

  app.get('/api/logout', (req, res) => {
    req.logout(); // .logout() attached to req by passport.js
    res.send(`user after logout: ${req.user}`);
  });
};
