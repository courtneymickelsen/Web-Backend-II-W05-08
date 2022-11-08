const express = require('express');
const passport = require('passport');
const routes = express.Router();
const googleAuth = require('../controllers/auth');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

routes.get('/', (req, res) => {res.send("Auth home")})
routes.get('/google', ensureGuest, passport.authenticate('google', { scope: ['profile'] }))

routes.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), 
(req, res) => {
    res.redirect('/');
});

routes.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); };
        res.redirect('/');
    });
});

module.exports = routes;