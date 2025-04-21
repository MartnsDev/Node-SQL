const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

const loginPage = (req, res) => {
  res.render('login');
};

const loginAction = (req, res) => {
  const { email, password } = req.body;

  userModel.findUserByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.send('Usuário não encontrado!');
    }

    const user = results[0];

    if (!bcrypt.compareSync(password, user.senha_hash)) {
      return res.send('Senha incorreta!');
    }

    req.session.user = user;
    res.redirect('/dashboard');
  });
};

const registerPage = (req, res) => {
  res.render('register');
};

const registerAction = (req, res) => {
  const { name, email, password } = req.body;

  userModel.findUserByEmail(email, (err, results) => {
    if (results.length > 0) {
      return res.send('Este e-mail já está registrado.');
    }

    userModel.createUser(name, email, password, (err) => {
      if (err) {
        return res.send('Erro ao criar conta.');
      }

      res.redirect('/login');
    });
  });
};

const dashboardPage = (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  res.render('dashboard', { user: req.session.user });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Erro ao sair.');
    }
    res.redirect('/login');
  });
};

module.exports = { loginPage, loginAction, registerPage, registerAction, dashboardPage, logout };
