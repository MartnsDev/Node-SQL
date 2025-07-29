#  Sistema de Login com Node.js + MySQL

Projeto completo de autenticação de usuários com back-end em Node.jss.

##  Funcionalidades
- Cadastro de usuário
- Login com autenticação segura (bcrypt)
- Mensagem de erro para usuários não encontrados
- Sessão com `express-session`
- Redirecionamento após login


##  Tecnologias utilizadas
- Node.js
- Express
- MySQL
- Express-session
- Bcryptjs
- Dotenv
- EJS (pode trocar por HTML se quiser)

CREATE DATABASE IF NOT EXISTS sistema_login;<br>
## Para rodar basta configurar o banco de dados, criar as tabelas e rodar o app.js no node.

CREATE DATABASE IF NOT EXISTS sistema_login;<br>

USE sistema_login; <br>

CREATE TABLE IF NOT EXISTS usuarios ( <br>
    id INT AUTO_INCREMENT PRIMARY KEY, <br>
    email VARCHAR(100) NOT NULL UNIQUE, <br>
    senha_hash VARCHAR(255) NOT NULL, <br>
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP <br>
); <br>

Instale as dependências:
npm install


Inicie a aplicação:
node app.js
