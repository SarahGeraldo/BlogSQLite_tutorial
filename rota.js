const express = require("express");

// porta TCP do servidor HTTP da aplicação (app.js):
const PORT = 8000;

const app = express();

const index = "<a href= '/sobre'>SOBRE</a><br><a href= '/info'>INFO</a>";
const sobre = 'Você está na página "Sobre"<br><a href="/">Voltar</a>';
const info = 'Você está na página "Info"<br><a href="/">Voltar</a>';

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

// arrow function:
// "app.listen()" precisa ser o último comando executado da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`servidor sendo executado na porta ${PORT}!!!!!!!`);
});
