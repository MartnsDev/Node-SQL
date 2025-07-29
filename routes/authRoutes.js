const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.loginPage);

router.post('/login', authController.loginAction);

router.get('/register', authController.registerPage);

router.post('/register', authController.registerAction);

router.get('/dashboard', authController.dashboardPage);

router.get('/logout', authController.logout);

module.exports = router;
