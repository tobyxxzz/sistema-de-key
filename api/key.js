export default function handler(req, res) {
  const { token } = req.query;

  global.tokens ??= {};

  const data = global.tokens[token];
  if (!data) {
    return res.json({ error: "token inválido" });
  }

  // expira em 24h
  if (Date.now() - data.time > 24 * 60 * 60 * 1000) {
    delete global.tokens[token];
    return res.json({ error: "expirado" });
  }

  // gera key do dia (sempre igual no mesmo dia)
  const day = new Date().toISOString().slice(0, 10);
  const key = `ZENITH-${day}-${token}`;

  res.json({ key });
}
