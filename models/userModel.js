const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Função para encontrar um usuário pelo e-mail
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(query, [email], callback);
};

// Função para criar um novo usuário
const createUser = (name, email, password, callback) => {
  const hashPassword = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)';
  db.query(query, [name, email, hashPassword], callback);
};

module.exports = { findUserByEmail, createUser };
