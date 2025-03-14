const express = require("express");

// porta TCP do servidor HTTP da aplicação (app.js):
const PORT = 3000;

const app = express();

// o método "express.get" necessita de dois parâmetros

app.get("/", (req, res) => {
  res.send("Hello hello olleh");
});
/* req = dados de requisição do servidor para o cliente (REQUISITION)
 res = dados de resposta para o cliente (RESULT) */

// arrow function:
// "app.listen()" precisa ser o último comando executado da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`servidor sendo executado na porta ${PORT}!!!!!!!`);
});
