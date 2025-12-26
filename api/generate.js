import crypto from "crypto";

export default function handler(req, res) {
  // cria storage global (se ainda não existir)
  global.tokens ??= {};

  // gera token curto
  const token = crypto.randomBytes(4).toString("hex"); // ex: a9f3c2d1
  const now = Date.now();

  // salva infos do visitante
  global.tokens[token] = {
    time: now,
    ua: req.headers["user-agent"] || "unknown"
  };

  // redireciona pra subpágina da key
  res.writeHead(302, {
    Location: `/k/${token}`,
  });
  res.end();
}
