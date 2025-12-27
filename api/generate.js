export default async function handler(req, res) {
  const hash = req.query.hash;

  if (!hash) {
    return res.status(403).send("Hash ausente");
  }

  // ⚠️ AUTH TOKEN DO LINKVERTISE
  const AUTH_TOKEN = process.env.LINKVERTISE_TOKEN;

  try {
    const response = await fetch(
      `https://publisher.linkvertise.com/api/v1/anti_bypassing?token=${AUTH_TOKEN}&hash=${hash}`,
      { method: "POST" }
    );

    const result = await response.text();

    if (result !== "true") {
      return res.status(403).send("Acesso negado");
    }

    // 🔑 gera token interno
    const token = "zth_" + Math.random().toString(36).slice(2, 12);

    // ⚠️ por enquanto só redireciona
    return res.redirect(`/k?token=${token}`);

  } catch (err) {
    return res.status(500).send("Erro interno");
  }
}
