const express = require("express");

// porta TCP do servidor HTTP da aplicação (app.js):
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello hello olleh");
});
// req = dados de requisição do servidor para o cliente
// res = dados de resposta do cliente

// arrow function:
// "app.listen()" precisa ser o último comando executado da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`servidor sendo executado na porta ${PORT}!!!!!!!`);
});
