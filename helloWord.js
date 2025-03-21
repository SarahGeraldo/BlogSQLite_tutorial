const express = require("express");
const sqlite3 = require("sqlite3");

// porta TCP do servidor HTTP da aplicação (app.js):
const PORT = 8000;

const app = express();

const db = new sqlite3.Database("user.db"); // instânciapara uso do sqlite3
db.serialize(() => {
  // é uma método da biblioteca sqlite usado para enviar mensagens para ele (permite executar comandos na sereal)
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

const index =
  "<a href='/sobre'>SOBRE</a><br><a href='/info'>INFO</a><br><a href='/login'>LOGIN</a><br><a href='/cadastro'>CADASTRO</a><br>";
const sobre = 'Você está na página "Sobre"<br><a href="/">Voltar</a>';
const info = 'Você está na página "Info"<br><a href="/">Voltar</a>';
const login = 'Você está na página "login"<br><a href="/">Voltar</a>';
const cadastro = 'Você está na página "cadastro"<br><a href="/">Voltar</a>';

// o método "express.get" necessita de dois parâmetros

app.get("/", (req, res) => {
  // rota raiz do meu servidor, acesse o browser com o endereço  http://localhost:8000/
  res.send(index);
});
/* req = dados de requisição do servidor para o cliente (REQUISITION)
 res = dados de resposta para o cliente (RESULT) */

app.get("/sobre", (req, res) => {
  // rota raiz do meu servidor, acesse o browser com o endereço  http://localhost:8000/sobre
  res.send(sobre);
});

app.get("/info", (req, res) => {
  // rota raiz do meu servidor, acesse o browser com o endereço  http://localhost:8000/info
  res.send(info);
});

app.get("/login", (req, res) => {
  // rota raiz do meu servidor, acesse o browser com o endereço
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  // rota raiz do meu servidor, acesse o browser com o endereço
  res.send(cadastro);
});

// arrow function:
// "app.listen()" precisa ser o último comando executado da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`servidor sendo executado na porta ${PORT}!!!!!!!`);
});
