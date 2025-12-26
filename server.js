// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Função pra gerar key aleatória
function gerarKey() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomPart = "";
  for (let i = 0; i < 12; i++) {
    randomPart += chars[Math.floor(Math.random() * chars.length)];
  }
  return `ZENITH-${randomPart}`;
}

// Armazena a key do dia
let keyDoDia = gerarKey();
let hoje = new Date().toDateString();

// Middleware pra atualizar key só 1 vez por dia
app.use((req, res, next) => {
  const hojeAtual = new Date().toDateString();
  if (hojeAtual !== hoje) {
    hoje = hojeAtual;
    keyDoDia = gerarKey();
  }
  next();
});

// Endpoint da API
app.get("/key", (req, res) => {
  res.json({ key: keyDoDia });
});

// Servir HTML (opcional)
app.use(express.static("public")); // se colocar index.html dentro de /public

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
