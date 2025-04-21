const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Página de login
router.get('/login', authController.loginPage);

// Ação de login
router.post('/login', authController.loginAction);

// Página de registro
router.get('/register', authController.registerPage);

// Ação de registro
router.post('/register', authController.registerAction);

// Página do dashboard (apenas para usuários autenticados)
router.get('/dashboard', authController.dashboardPage);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
