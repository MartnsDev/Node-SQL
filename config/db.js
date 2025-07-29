const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'login_system'
});

db.connect((err) => {
  if (err) {
    console.log('Erro na conexão com o banco de dados', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida');
  }
});

module.exports = db;
