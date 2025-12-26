let tokenDoDia = "";
let hoje = "";

function gerarToken() {
  return Math.random().toString(36).substring(2, 10);
}

export default function handler(req, res) {
  const hojeAtual = new Date().toDateString();

  if (hojeAtual !== hoje) {
    hoje = hojeAtual;
    tokenDoDia = gerarToken();
  }

  res.status(200).json({
    url: `/k/${tokenDoDia}`
  });
}
