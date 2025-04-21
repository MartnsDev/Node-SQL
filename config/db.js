const mysql = require('mysql2');

// Configuração de conexão ao banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Substitua com seu usuário
  password: '', // Substitua com sua senha
  database: 'login_system' // Crie esse banco no MySQL Workbench
});

db.connect((err) => {
  if (err) {
    console.log('Erro na conexão com o banco de dados', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida');
  }
});

module.exports = db;
