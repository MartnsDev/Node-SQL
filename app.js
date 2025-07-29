const express = require('express');
const session = require('express-session');
const app = express();
const authRoutes = require('./routes/authRoutes');
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false
}));

app.use(authRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
