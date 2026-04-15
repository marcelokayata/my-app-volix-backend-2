const express = require('express');
const { login, register } = require('../controllers/auth');
const router = express.Router();

// Ruta de ejemplo para el login
router.post('/login', login);
router.post('/register', register);

module.exports = router;